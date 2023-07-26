const express = require('express');
const router  = express.Router();
const incidenciasController = require('../controllers/incidenciasController');

router.get('/incidencias/:id', incidenciasController.list);
router.get('/incidencias/:id/:idIncidencia', incidenciasController.listIncidencia);
router.post('/upload', incidenciasController.upload);
router.get('/comentarios/:id', incidenciasController.comentarios);
router.post('/comentarios', incidenciasController.createComentario);
router.delete('/comentarios/:id', incidenciasController.deleteComentario);
router.put('/incidencias/:id', incidenciasController.updateIncidencia);


module.exports = router;
