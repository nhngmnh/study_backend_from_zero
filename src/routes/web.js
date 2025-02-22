const express = require('express');
const { xulyEjs,hoiNhuNgocMinh, getHomePage, createUser, createForm ,getUpdateUser, postUpdateUser} = require('../controllers/homeController');
const router = express.Router();
router.get('/ngl', (req, res) => {
    res.send('Hello World my name is Minh!');   
  })
router.get('/hi',xulyEjs)
router.get('/',getHomePage);
router.post('/create-user',createUser)
router.get('/create',createForm)
router.get('/update-user/:id',getUpdateUser);
router.post('/saveEditUser',postUpdateUser);
module.exports = router;