const controller = {};

controller.list = (req, res) => {
  const usuarioId = req.params.id; // Obtener el ID del cliente desde los parámetros de la URL
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    }
    conn.query('SELECT tipo, descripcion, fecha, lugar, image FROM incidencia WHERE idusuario = ?', [usuarioId], (err, incidencia) => {
      if (err) {
        res.json(err);
      }      
      res.json(incidencia);
    });
  });
};



module.exports = controller;