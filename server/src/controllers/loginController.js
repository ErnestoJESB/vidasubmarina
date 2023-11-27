const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



const controller = {};


controller.register = (req, res) => {
  const sql = 'INSERT INTO user (name, lastname, email, password, address, phone, tipo_user) VALUES (?)';
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error al encriptar contraseña" });
    let tipo_user = "cliente";
    const values = [
      req.body.name,
      req.body.lastname,
      req.body.email,
      hash,
      req.body.address,
      req.body.phone,
      tipo_user
    ];
    req.getConnection((err, conn) => {
      if (err) return res.status(500).send('Error del servidor');
      conn.query(sql, [values], (err, result) => {
        if (err) {
          return res.json("Error al registrar usuario");
        }
        return res.json(result);
      });
    });
  })
};



controller.login = (req, res) => {
  const sql = 'SELECT user.tipo_user, user.name, user.id, empresa.idempresa, user.password FROM user INNER JOIN empresa ON user.id = empresa.user_id WHERE user.email = ?';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, [req.body.email], (err, data) => {
      if (err) return res.json("Obi wan kenobi has failed us");
      if (data.length > 0) {
        bcrypt.compare(req.body.password.toString(), data[0].password, (err, result) => {
          if (err) return res.json({ Error: "Error al comparar contraseñas" });
          if (result) {
            const tipo_usuario = data[0].tipo_user;
            const name = data[0].name;
            const id = data[0].id;
            const idempresa = data[0].idempresa;
            const token = jwt.sign({ tipo_usuario, name, id, idempresa}, 'VIDASUB', { expiresIn: '1h' })
            res.cookie('token', token)
            return res.json({ Login: true, tipo_usuario: data[0].tipo_user, userName: data[0].name, userId: data[0].id, idempresa: data[0].idempresa });
          }
          return res.json({ Login: false });
        });
      } else {
        return res.json({ Login: false });
      }
    });
  });

};


controller.user = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ Error: "No hay token" });
  jwt.verify(token, 'VIDASUB', (err, decoded) => {
    if (err) return res.json({ Error: "Token invalido" });
    req.tipo_usuario = decoded.tipo_usuario;
    req.userName = decoded.name;
    req.userId = decoded.id;
    req.idempresa = decoded.idempresa;
    next();
  });
  return res.json({ Status: "Success", tipo_usuario: req.tipo_usuario, userName: req.userName, userId: req.userId, idempresa: req.idempresa });
};

controller.logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ Status: "Success" });
};


controller.condominios = (req, res) => {
  const sql = 'SELECT id, name FROM condominio';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};


module.exports = controller;