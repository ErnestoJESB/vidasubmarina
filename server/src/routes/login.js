const express = require('express');
const router  = express.Router();
const loginController = require('../controllers/loginController');


router.post('/register', loginController.register)
router.post('/login', loginController.login)
router.get('/user', loginController.user)
router.get('/logout', loginController.logout)

module.exports = router;
