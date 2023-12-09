'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [{
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:46 PM",
      "wakeUpTime": "7:43 AM",
      "totalSleepDuration": 8,
      "userId": 26
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:46 AM",
      "wakeUpTime": "2:17 AM",
      "totalSleepDuration": 4,
      "userId": 21
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:21 PM",
      "wakeUpTime": "1:29 PM",
      "totalSleepDuration": 2,
      "userId": 11
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:29 PM",
      "wakeUpTime": "5:42 PM",
      "totalSleepDuration": 16,
      "userId": 18
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:19 AM",
      "wakeUpTime": "6:35 PM",
      "totalSleepDuration": 20,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:29 AM",
      "wakeUpTime": "2:39 PM",
      "totalSleepDuration": 21,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:48 AM",
      "wakeUpTime": "11:06 AM",
      "totalSleepDuration": 17,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:24 PM",
      "wakeUpTime": "7:45 PM",
      "totalSleepDuration": 17,
      "userId": 23
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:26 AM",
      "wakeUpTime": "3:22 AM",
      "totalSleepDuration": 0,
      "userId": 9
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:51 PM",
      "wakeUpTime": "1:05 PM",
      "totalSleepDuration": 24,
      "userId": 4
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:27 PM",
      "wakeUpTime": "1:12 AM",
      "totalSleepDuration": 14,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:52 PM",
      "wakeUpTime": "6:06 PM",
      "totalSleepDuration": 21,
      "userId": 21
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:07 PM",
      "wakeUpTime": "4:57 AM",
      "totalSleepDuration": 2,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:55 PM",
      "wakeUpTime": "10:23 AM",
      "totalSleepDuration": 19,
      "userId": 13
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:52 PM",
      "wakeUpTime": "8:58 PM",
      "totalSleepDuration": 5,
      "userId": 30
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:47 PM",
      "wakeUpTime": "9:57 AM",
      "totalSleepDuration": 21,
      "userId": 28
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:33 AM",
      "wakeUpTime": "2:25 AM",
      "totalSleepDuration": 11,
      "userId": 19
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:56 PM",
      "wakeUpTime": "12:24 PM",
      "totalSleepDuration": 7,
      "userId": 19
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:44 AM",
      "wakeUpTime": "9:32 AM",
      "totalSleepDuration": 0,
      "userId": 29
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:12 PM",
      "wakeUpTime": "9:42 PM",
      "totalSleepDuration": 21,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:47 PM",
      "wakeUpTime": "7:49 PM",
      "totalSleepDuration": 21,
      "userId": 8
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:39 PM",
      "wakeUpTime": "6:12 AM",
      "totalSleepDuration": 5,
      "userId": 19
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:40 AM",
      "wakeUpTime": "4:59 PM",
      "totalSleepDuration": 12,
      "userId": 5
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:31 AM",
      "wakeUpTime": "4:04 PM",
      "totalSleepDuration": 23,
      "userId": 17
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:35 AM",
      "wakeUpTime": "4:15 AM",
      "totalSleepDuration": 14,
      "userId": 15
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:18 AM",
      "wakeUpTime": "9:44 AM",
      "totalSleepDuration": 22,
      "userId": 9
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:45 AM",
      "wakeUpTime": "4:29 PM",
      "totalSleepDuration": 11,
      "userId": 5
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:23 PM",
      "wakeUpTime": "8:38 PM",
      "totalSleepDuration": 17,
      "userId": 14
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:30 PM",
      "wakeUpTime": "9:20 AM",
      "totalSleepDuration": 3,
      "userId": 4
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:20 AM",
      "wakeUpTime": "12:22 PM",
      "totalSleepDuration": 6,
      "userId": 28
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:20 AM",
      "wakeUpTime": "4:34 PM",
      "totalSleepDuration": 0,
      "userId": 18
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:32 PM",
      "wakeUpTime": "1:33 PM",
      "totalSleepDuration": 1,
      "userId": 15
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:36 AM",
      "wakeUpTime": "4:08 PM",
      "totalSleepDuration": 15,
      "userId": 2
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:01 PM",
      "wakeUpTime": "3:19 PM",
      "totalSleepDuration": 19,
      "userId": 20
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:51 AM",
      "wakeUpTime": "1:54 AM",
      "totalSleepDuration": 12,
      "userId": 23
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:31 PM",
      "wakeUpTime": "7:37 AM",
      "totalSleepDuration": 20,
      "userId": 22
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:36 PM",
      "wakeUpTime": "10:27 AM",
      "totalSleepDuration": 6,
      "userId": 25
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:33 AM",
      "wakeUpTime": "9:34 AM",
      "totalSleepDuration": 14,
      "userId": 3
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:54 AM",
      "wakeUpTime": "7:32 AM",
      "totalSleepDuration": 20,
      "userId": 6
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:49 PM",
      "wakeUpTime": "12:34 AM",
      "totalSleepDuration": 7,
      "userId": 30
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "10:04 AM",
      "wakeUpTime": "12:25 AM",
      "totalSleepDuration": 4,
      "userId": 5
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:28 PM",
      "wakeUpTime": "1:30 PM",
      "totalSleepDuration": 7,
      "userId": 25
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:00 AM",
      "wakeUpTime": "11:17 PM",
      "totalSleepDuration": 6,
      "userId": 14
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:18 AM",
      "wakeUpTime": "2:18 AM",
      "totalSleepDuration": 7,
      "userId": 6
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:59 AM",
      "wakeUpTime": "3:01 PM",
      "totalSleepDuration": 9,
      "userId": 7
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:24 PM",
      "wakeUpTime": "1:20 AM",
      "totalSleepDuration": 3,
      "userId": 23
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:22 AM",
      "wakeUpTime": "5:46 PM",
      "totalSleepDuration": 6,
      "userId": 27
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:58 PM",
      "wakeUpTime": "10:19 PM",
      "totalSleepDuration": 11,
      "userId": 22
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:11 PM",
      "wakeUpTime": "10:47 PM",
      "totalSleepDuration": 16,
      "userId": 7
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:59 AM",
      "wakeUpTime": "11:25 AM",
      "totalSleepDuration": 24,
      "userId": 27
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:27 PM",
      "wakeUpTime": "6:17 AM",
      "totalSleepDuration": 1,
      "userId": 13
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:44 AM",
      "wakeUpTime": "8:22 AM",
      "totalSleepDuration": 7,
      "userId": 12
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:04 PM",
      "wakeUpTime": "2:25 AM",
      "totalSleepDuration": 0,
      "userId": 22
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:44 AM",
      "wakeUpTime": "8:05 PM",
      "totalSleepDuration": 11,
      "userId": 20
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:43 PM",
      "wakeUpTime": "3:58 PM",
      "totalSleepDuration": 22,
      "userId": 25
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:12 PM",
      "wakeUpTime": "10:12 PM",
      "totalSleepDuration": 10,
      "userId": 8
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:30 PM",
      "wakeUpTime": "9:13 PM",
      "totalSleepDuration": 3,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:03 AM",
      "wakeUpTime": "4:45 AM",
      "totalSleepDuration": 5,
      "userId": 12
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "10:26 AM",
      "wakeUpTime": "8:03 AM",
      "totalSleepDuration": 18,
      "userId": 23
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:16 PM",
      "wakeUpTime": "1:40 PM",
      "totalSleepDuration": 17,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:33 PM",
      "wakeUpTime": "7:53 PM",
      "totalSleepDuration": 6,
      "userId": 19
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:13 AM",
      "wakeUpTime": "8:15 AM",
      "totalSleepDuration": 21,
      "userId": 19
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:58 AM",
      "wakeUpTime": "1:40 PM",
      "totalSleepDuration": 14,
      "userId": 2
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:45 PM",
      "wakeUpTime": "4:00 PM",
      "totalSleepDuration": 12,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:50 PM",
      "wakeUpTime": "12:16 AM",
      "totalSleepDuration": 8,
      "userId": 15
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:51 AM",
      "wakeUpTime": "7:34 PM",
      "totalSleepDuration": 13,
      "userId": 27
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:24 AM",
      "wakeUpTime": "7:49 AM",
      "totalSleepDuration": 24,
      "userId": 12
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:37 PM",
      "wakeUpTime": "2:33 AM",
      "totalSleepDuration": 10,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:27 PM",
      "wakeUpTime": "9:48 PM",
      "totalSleepDuration": 8,
      "userId": 21
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:25 AM",
      "wakeUpTime": "2:35 PM",
      "totalSleepDuration": 7,
      "userId": 9
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:29 AM",
      "wakeUpTime": "10:02 PM",
      "totalSleepDuration": 24,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:39 PM",
      "wakeUpTime": "8:36 AM",
      "totalSleepDuration": 17,
      "userId": 27
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:38 AM",
      "wakeUpTime": "2:47 AM",
      "totalSleepDuration": 7,
      "userId": 11
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:09 AM",
      "wakeUpTime": "12:32 PM",
      "totalSleepDuration": 7,
      "userId": 15
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:14 AM",
      "wakeUpTime": "6:23 PM",
      "totalSleepDuration": 19,
      "userId": 4
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:25 AM",
      "wakeUpTime": "8:28 AM",
      "totalSleepDuration": 7,
      "userId": 9
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:38 AM",
      "wakeUpTime": "5:34 PM",
      "totalSleepDuration": 21,
      "userId": 9
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:17 AM",
      "wakeUpTime": "11:09 AM",
      "totalSleepDuration": 14,
      "userId": 16
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:17 PM",
      "wakeUpTime": "7:44 AM",
      "totalSleepDuration": 12,
      "userId": 27
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:51 PM",
      "wakeUpTime": "4:31 AM",
      "totalSleepDuration": 19,
      "userId": 5
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "7:20 PM",
      "wakeUpTime": "1:15 AM",
      "totalSleepDuration": 22,
      "userId": 3
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:23 AM",
      "wakeUpTime": "11:40 AM",
      "totalSleepDuration": 3,
      "userId": 28
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "10:36 PM",
      "wakeUpTime": "3:17 PM",
      "totalSleepDuration": 6,
      "userId": 24
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "5:42 PM",
      "wakeUpTime": "5:03 AM",
      "totalSleepDuration": 12,
      "userId": 4
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "8:54 PM",
      "wakeUpTime": "11:56 PM",
      "totalSleepDuration": 15,
      "userId": 12
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:50 AM",
      "wakeUpTime": "9:17 PM",
      "totalSleepDuration": 21,
      "userId": 22
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:30 AM",
      "wakeUpTime": "4:17 PM",
      "totalSleepDuration": 2,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "4:38 PM",
      "wakeUpTime": "6:25 AM",
      "totalSleepDuration": 18,
      "userId": 19
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "2:15 AM",
      "wakeUpTime": "9:50 AM",
      "totalSleepDuration": 18,
      "userId": 18
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "1:57 AM",
      "wakeUpTime": "5:39 AM",
      "totalSleepDuration": 17,
      "userId": 20
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:47 PM",
      "wakeUpTime": "3:14 PM",
      "totalSleepDuration": 24,
      "userId": 30
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:05 PM",
      "wakeUpTime": "5:20 AM",
      "totalSleepDuration": 12,
      "userId": 7
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:02 AM",
      "wakeUpTime": "5:36 PM",
      "totalSleepDuration": 18,
      "userId": 11
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "3:09 AM",
      "wakeUpTime": "3:04 PM",
      "totalSleepDuration": 15,
      "userId": 10
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "11:29 AM",
      "wakeUpTime": "6:47 PM",
      "totalSleepDuration": 3,
      "userId": 3
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:57 AM",
      "wakeUpTime": "12:05 AM",
      "totalSleepDuration": 9,
      "userId": 14
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:22 PM",
      "wakeUpTime": "7:50 PM",
      "totalSleepDuration": 8,
      "userId": 18
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "9:25 PM",
      "wakeUpTime": "10:30 PM",
      "totalSleepDuration": 8,
      "userId": 18
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "6:15 PM",
      "wakeUpTime": "4:21 PM",
      "totalSleepDuration": 4,
      "userId": 13
    }, {
      "date": "2023-12-09T00:00:00Z",
      "sleepTime": "12:18 AM",
      "wakeUpTime": "6:06 AM",
      "totalSleepDuration": 2,
      "userId": 13
    }];
    data.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('SleepEntries', data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SleepEntries', null, {});
  }
};
