const path = require('path');
const multer = require('multer')


const controller = {};

controller.list = (req, res) => {
  const usuarioId = req.params.id; // Obtener el ID del cliente desde los parámetros de la URL
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    }
    conn.query('SELECT tipo, descripcion, fecha, lugar, image, estatus FROM incidencia WHERE idusuario = ? ORDER BY fecha DESC', [usuarioId], (err, incidencia) => {
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

const fs = require('fs');

controller.create = (req, res) => {
  fileUpload(req, res, (err) => {
    if (err) {
      console.error('Error uploading image:', err);
      return res.status(500).send('Error uploading image');
    }
    console.log(req.file);
    const data = req.body;
    console.log(data);

    req.getConnection((err, conn) => {
      if (err) {
        console.error('Server error:', err);
        return res.status(500).send('Server error');
      }


      conn.query('INSERT INTO incidencia SET ?', data, (err, rows) => {
        if (err) {
          console.error('Error inserting image:', err);
          return res.status(500).send('Error inserting image');
        }
        console.log('Image inserted successfully');
      });
    });
  });
};


controller.upload = (req, res) => {
  fileUpload(req, res, (err) => {
    if (err) {
      console.error('Error uploading image:', err);
      return res.status(500).send('Error uploading image');
    }
    console.log(req.file);
    const filename = req.file.filename;
    const data = req.body;
    data.image = filename;
    console.log(data);
    req.getConnection((err, conn) => {
      if (err) {
        console.error('Server error:', err);
        return res.status(500).send('Server error');
      }


      conn.query('INSERT INTO incidencia SET ?', data, (err, rows) => {
        if (err) {
          console.error('Error inserting image:', err);
          return res.status(500).send('Error inserting image');
        }
        console.log('Image inserted successfully');
      }); 
    });
  });
};




module.exports = controller;