require('dotenv').config()
const express = require('express')
const app = express();
const router= require('./routes/web');
const path=require('path');
const port=process.env.PORT;
const configViewEngine= require('./config/configViewEngine');
const connection= require('./config/db');
configViewEngine(app);
app.use('/', router);

connection.query(
  'select * from Users',
  function (err,results,fields) {
    console.log('results',results);
    console.log('fields',fields);
  }
) 
app.listen(port,process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})