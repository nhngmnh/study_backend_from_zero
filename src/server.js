require('dotenv').config()
const express = require('express')
const app = express()
const path=require('path');
const port=process.env.PORT;
const configViewEngine= require('./config/configViewEngine');

configViewEngine(app);
app.get('/', (req, res) => {
  res.send('Hello World my name is Minh!');
  console.log(__dirname);
  
})
app.get('/ngl', (req, res) => {
    res.send('Hello vo cua to Nguyen Gia Linh!')
  })
app.get('/hi', (req, res) => {
    res.render('index.ejs', { title: 'Hey', message: 'Hello there!' })
  })
app.listen(port,process.env.HOST_NAME, () => {
  console.log(`Example app listening on port ${port}`)
})