require('dotenv').config()
const express = require('express')
const app = express();
const router= require('./routes/web');
const path=require('path');
const port=process.env.PORT;
const configViewEngine= require('./config/configViewEngine');

configViewEngine(app);
app.use('/', router);
app.listen(port,process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})