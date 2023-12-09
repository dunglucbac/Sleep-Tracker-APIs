// sleepEntry.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SleepEntry extends Model {
    static associate(models) {
      SleepEntry.belongsTo(models.User, {
        foreignKey: 'userId', // This is the foreign key referencing the User model
        onDelete: 'CASCADE', // Cascade delete when a UserProfile is deleted
      });
    }
  }

  SleepEntry.init({
    date: DataTypes.DATE,
    sleepTime: DataTypes.TIME,
    wakeUpTime: DataTypes.TIME,
    totalSleepDuration: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'SleepEntry',
  });

  return SleepEntry;
};
