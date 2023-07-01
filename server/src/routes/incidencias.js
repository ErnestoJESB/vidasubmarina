const express = require('express');
const router  = express.Router();
const incidenciasController = require('../controllers/incidenciasController');

router.get('/incidencias/:id', incidenciasController.list);
router.post('/incidencias', incidenciasController.create);


module.exports = router;
