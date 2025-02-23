require('dotenv').config()
const express = require('express')
const app = express();
const router= require('./routes/web');
const path=require('path');
const port=process.env.PORT;
const configViewEngine= require('./config/configViewEngine');
const sequelize=require('./config/db');
const Family= require('./models/Family');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
configViewEngine(app);
app.use('/', router);
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database!');

    // Tạo bảng trong database
    sequelize.sync() // Hoặc { alter: true }
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Unable to create tables:", err);
  });

    // Thêm dữ liệu mẫu vào bảng Family
    await Family.create({
      homeName: 'My Sweet Home',
      address: '123 Main Street',
    });

    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
 app.listen(port,process.env.HOST_NAME, () => {
   console.log(`Example app listening on port ${port}`)
 })