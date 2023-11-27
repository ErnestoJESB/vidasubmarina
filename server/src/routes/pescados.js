const express = require('express');
const router  = express.Router();
const pescadosController = require('../controllers/pescadosController');


router.get('/pescados', pescadosController.pescados)
router.get('/ticket', pescadosController.ticket)
router.get('/empresas', pescadosController.empresas)
router.get('/proveedor/:idproveedor', pescadosController.proveedor)
router.get('/producto/:idproveedor', pescadosController.idproducto)
router.get('/productos', pescadosController.productos)
router.get('/productos/:producto', pescadosController.producto)
router.get('/empresa/:idUser', pescadosController.empresa)
router.get('/empresaprod/:idUser', pescadosController.empresaprod)
router.get('/productosname', pescadosController.productosname)
router.post('/addproducto', pescadosController.addProducto)


module.exports = router;