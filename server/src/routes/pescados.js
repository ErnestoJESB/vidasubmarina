const express = require('express');
const router  = express.Router();
const pescadosloginController = require('../controllers/pescadosController');


router.get('/pescados', pescadosloginController.pescados)


module.exports = router;