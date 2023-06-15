const express = require('express');
const router  = express.Router();
const path = require('path');
const morgan = require('morgan');
const loginController = require('../controllers/loginController');

router.post('/register', loginController.register)
router.post('/login', loginController.login)

module.exports = router;
