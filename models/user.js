// user.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.SleepEntry, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    }
  }

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING, // Assuming you'll hash and store passwords securely
    role: {
      type: DataTypes.ENUM('admin', 'normal'),
      defaultValue: 'normal',
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
