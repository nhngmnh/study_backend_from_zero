require('dotenv').config();
const { Sequelize } = require('sequelize');
//const mysql = require('mysql2/promise');
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER ,process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port:process.env.DB_PORT,
});
// const connection=mysql.createPool({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user:process.env.DB_USER ,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
//   })

module.exports = sequelize;