const path = require('path');
const multer = require('multer')


const controller = {};

controller.list = (req, res) => {
  const usuarioId = req.params.id; // Obtener el ID del cliente desde los parámetros de la URL
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    }
    conn.query('SELECT tipo, descripcion, fecha, lugar, image, estatus FROM incidencia WHERE idusuario = ?', [usuarioId], (err, incidencia) => {
      if (err) {
        res.json(err);
      }
      res.json(incidencia);
    });
  });
};

const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, '../incidencias'),
  filename: (req, file, cb) => {
    cb(null, 'MWOLD' + '-incidencia-' + file.originalname);
  }
});

const fileUpload = multer({
  storage: diskstorage
}).single('image');

controller.create = (req, res) => {
  fileUpload(req, res, (err) => {
    if (err) {
      res.json(err);
    }
    const data = req.body;
    const image = req.file.filename;
    data.image = image;
    req.getConnection((err, conn) => {
      if (err) {
        res.json(err);
      }
      conn.query('INSERT INTO incidencia set ?', [data], (err, incidencia) => {
        if (err) {
          res.json(err);
        }
        res.json(incidencia);
      });
    });
  });
};





module.exports = controller;