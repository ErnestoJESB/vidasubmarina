const controller = {};

controller.list = (req, res) => {
    const incidenciaId = req.params.id; // Obtener el ID del cliente desde los parámetros de la URL
    console.log(typeof(incidenciaId));
    req.getConnection((err, conn) => {
      if (err) {
        res.json(err);
      }
      conn.query('SELECT * FROM incidencia WHERE idusuario = ?', [incidenciaId], (err, incidencia) => {
        if (err) {
          res.json(err);
        }
        res.render('incidencia', {
          data: incidencia
        });
      });
    });
  };
  


module.exports = controller;