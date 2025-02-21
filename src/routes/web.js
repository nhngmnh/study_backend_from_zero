const express = require('express');
const { xulyEjs,hoiNhuNgocMinh, getHomePage, createUser, createForm ,getUpdateUser} = require('../controllers/homeController');
const router = express.Router();
router.get('/ngl', (req, res) => {
    res.send('Hello World my name is Minh!');   
  })
router.get('/hi',xulyEjs)
router.get('/',getHomePage);
router.post('/create-user',createUser)
router.get('/create',createForm)
router.post('/update-user',getUpdateUser);
module.exports = router;