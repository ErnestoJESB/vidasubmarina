const controller = {};


controller.pescados = (req, res) => {
  const sql = 'SELECT * FROM cliente';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};


controller.ticket = (req, res) => {
  //const sql = 'SELECT user.name, user.email, user.phone, pedidos.fecha, pedidos.precio_unitario, pedidos.cantidad, pedidos.total, pedidos.nota, productos.nombre, productos.image, productos.descripcion FROM user INNER JOIN pedidos_user ON user.id = pedidos_user.user_id  INNER JOIN pedidos ON pedidos_user.pedidos_id = pedidos.id INNER JOIN productos ON pedidos.idproductos = productos.idproductos;';
  const sql = 'SELECT * FROM vidasub.ticket;';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};
controller.empresas = (req, res) => {
  const sql = 'SELECT * FROM vidasub.empresas;';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};

controller.proveedor = (req, res) => {
  const { idproveedor } = req.params;
  const sql = `SELECT * FROM vidasub.empresa WHERE idempresa = ${idproveedor};`;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};

controller.producto = (req, res) => {
  const sql = 'SELECT * FROM vidasub.productos;';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
}


module.exports = controller;