const express = require('express');
const router  = express.Router();
const pescadosController = require('../controllers/pescadosController');


router.get('/pescados', pescadosController.pescados)
router.get('/ticket', pescadosController.ticket)
router.get('/empresas', pescadosController.empresas)
router.get('/proveedor/:idproveedor', pescadosController.proveedor)
router.get('/producto', pescadosController.producto)


module.exports = router;