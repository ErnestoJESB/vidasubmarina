const express = require('express');
const router  = express.Router();
const loginController = require('../controllers/pescadosController');


router.get('/pescados', loginController.register)


module.exports = router;