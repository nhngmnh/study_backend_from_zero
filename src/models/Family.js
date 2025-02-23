const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../config/db');
const Family = sequelize.define(
  'Family',
  {
    // Model attributes are defined here
    homeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  { freezeTableName: true }
);

// `sequelize.define` also returns the model
console.log(Family === sequelize.models.Family); // true
module.exports = Family;