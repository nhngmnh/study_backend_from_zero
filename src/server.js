const express = require('express')
const app = express()
const port = 3000
const path=require('path')
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ngl', (req, res) => {
    res.send('Hello vo cua to Nguyen Gia Linh!')
  })
app.get('/hi', (req, res) => {
    res.render('index.ejs', { title: 'Hey', message: 'Hello there!' })
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})