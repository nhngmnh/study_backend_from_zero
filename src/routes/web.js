const express = require('express');
const { xulyEjs,hoiNhuNgocMinh, getHomePage } = require('../controllers/homeController');
const router = express.Router();
router.get('/ngl', (req, res) => {
    res.send('Hello World my name is Minh!');   
  })
router.get('/',hoiNhuNgocMinh);
router.get('/hi',xulyEjs)
router.get('/home',getHomePage);
module.exports = router;