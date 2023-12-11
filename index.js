'use strict';

const express = require('express');
const session = require('express-session');
const bcrypt = require("bcryptjs")
const { Op } = require('sequelize');
const { User, SleepEntry } = require('./models');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: 'false' }))
app.use(express.json())

app.use(session({
    secret: 'just-secret-key', // Replace with a strong secret for session encryption
    resave: false,
    saveUninitialized: true
}));
const authenticateUser = async (req, res, next) => {
    if (req.session && req.session.user) {
        // If session contains user data, populate req.user
        req.user = req.session.user;
    }
    next();
};

// Use the middleware globally for all routes
app.use(authenticateUser);

app.get('/createTables', (req, res) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        res.send('tables created!');
    })
})

app.post('/auth/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Check if user already exists with the provided email
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Default role is 'normal' unless specified as 'admin'
        const userRole = role === 'admin' ? 'admin' : 'normal';

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create a new user with the hashed password and specified role
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: userRole,
        });

        // Exclude password from the response
        const userResponse = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role,
        };

        return res.status(201).json({ message: 'User created successfully', user: userResponse });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error registering user' });
    }
});

// Login Endpoint
app.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if a user exists with the provided email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Store user info in session after successful login
        req.session.user = {
            id: user.id,
            email: user.email,
            role: user.role,
        };

        // If email and password match, authentication successful
        return res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error logging in' });
    }
});

// Route to list all users
app.get('/users', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.findAll({
            attributes: ['id', 'username', 'email', 'role'] // Define which fields to retrieve
        });

        return res.status(200).json({ users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching users' });
    }
});

const checkAdmin = async (req, res, next) => {
    try {
        // Get the logged-in user from the session
        const loggedInUserId = req.session.user.id;
        const loggedInUser = await User.findByPk(loggedInUserId);

        // Check if the logged-in user is an admin
        if (loggedInUser.role !== 'admin') {
            return res.status(403).json({ message: 'Unauthorized - Admin access required' });
        }

        // If the user is an admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error checking admin status' });
    }
};

// Route to delete user (accessible to admin only)
app.delete('/users/:id', checkAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the user with the specified ID
        await User.destroy({ where: { id } });

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting user' });
    }
});

// Route to edit user (accessible to admin only)
app.put('/users/:id', checkAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email } = req.body;

        // Update the user with the specified ID
        await User.update({ username, email }, { where: { id } });

        return res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating user' });
    }
});

const checkNormalUser = async (req, res, next) => {
    try {
        const userId = req.session.user.id;
        const user = await User.findByPk(userId);

        if (user.role !== 'normal') {
            return res.status(403).json({ message: 'Unauthorized - Only normal users can create sleep entries' });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error checking user role' });
    }
};

// Route to create a new sleep entry for a normal user
app.post('/sleep-entries', checkNormalUser, async (req, res) => {
    try {
        const { date, sleepTime, wakeUpTime, totalSleepDuration } = req.body;
        const userId = req.session.user.id;

        // Create a new sleep entry associated with the logged-in user
        const newSleepEntry = await SleepEntry.create({
            date,
            sleepTime,
            wakeUpTime,
            totalSleepDuration,
            userId, // Associate the sleep entry with the logged-in user
        });

        const entryResponse = {
            date: newSleepEntry.date,
            sleepTime: newSleepEntry.sleepTime,
            wakeUpTime: newSleepEntry.wakeUpTime,
            userId: newSleepEntry.userId,
        };

        return res.status(201).json({ message: 'Sleep entry created successfully', sleepEntry: entryResponse });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating sleep entry' });
    }
});

// Route to list all sleep entries for the logged-in user
app.get('/sleep-entries', async (req, res) => {
    try {
        const userId = req.session.user.id; // Retrieve user ID from session

        // Fetch all sleep entries associated with the logged-in user's userId
        const sleepEntries = await SleepEntry.findAll({ where: { userId } });

        return res.status(200).json({ sleepEntries });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching sleep entries for the user' });
    }
});

// Route to delete a user's sleep entry
app.delete('/sleep-entries/:entryId', async (req, res) => {
    try {
        const userId = req.session.user.id; // Logged-in user's ID
        const { entryId } = req.params;

        // Delete the sleep entry that matches the entryId and belongs to the logged-in user
        const deletedEntryCount = await SleepEntry.destroy({ where: { id: entryId, userId } });

        if (deletedEntryCount === 0) {
            return res.status(404).json({ message: 'Sleep entry not found or unauthorized' });
        }

        return res.status(200).json({ message: 'Sleep entry deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting sleep entry' });
    }
});


app.put('/sleep-entries/:entryId', async (req, res) => {
    try {
        const userId = req.session.user.id; // Logged-in user's ID
        const { entryId } = req.params;
        const { date, sleepTime, wakeUpTime, totalSleepDuration } = req.body;

        // Update the sleep entry that matches the entryId and belongs to the logged-in user
        const updatedEntry = await SleepEntry.update(
            { date, sleepTime, wakeUpTime, totalSleepDuration },
            { where: { id: entryId, userId }, returning: true }
        );

        if (updatedEntry[0] === 0) {
            return res.status(404).json({ message: 'Sleep entry not found or unauthorized' });
        }

        return res.status(200).json({ message: 'Sleep entry updated successfully', sleepEntry: updatedEntry[1][0] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating sleep entry' });
    }
});

app.get('/sleep-stats/weekly', async (req, res) => {
    try {
        const userId = req.session.user.id; // Retrieve user ID from session
        const today = new Date();
        const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000); // Date 7 days ago

        // Fetch sleep entries for the logged-in user within the last week
        const sleepEntries = await SleepEntry.findAll({
            where: {
                userId,
                date: {
                    [Op.between]: [sevenDaysAgo, today],
                },
            },
        });

        // Calculate average sleep duration
        const totalSleepDuration = sleepEntries.reduce((acc, entry) => acc + entry.totalSleepDuration, 0);
        const averageSleepDuration = sleepEntries.length > 0 ? totalSleepDuration / sleepEntries.length : 0;

        // Calculate average sleep time and wake-up time
        const sleepTimes = sleepEntries.map(entry => entry.sleepTime);
        const wakeUpTimes = sleepEntries.map(entry => entry.wakeUpTime);

        const averageSleepTime = calculateAverageTime(sleepTimes);
        const averageWakeUpTime = calculateAverageTime(wakeUpTimes);

        return res.status(200).json({
            averageSleepDuration,
            averageSleepTime,
            averageWakeUpTime,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching weekly sleep stats' });
    }
});

// Function to calculate average time from an array of time strings
function calculateAverageTime(times) {
    const timeInMilliseconds = times.map(time => {
        const [hours, minutes] = time.split(':');
        return new Date(1970, 0, 1, hours, minutes).getTime();
    });

    const averageTimeInMilliseconds = timeInMilliseconds.reduce((acc, val) => acc + val, 0) / timeInMilliseconds.length;
    if (!isNaN(averageTimeInMilliseconds)) {
        const averageDate = new Date(averageTimeInMilliseconds);
        const formattedAverageTime = averageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return formattedAverageTime;
    } else {
        return '00:00'; // Return a default time if calculation fails
    }
}


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
