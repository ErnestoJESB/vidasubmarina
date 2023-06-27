const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



const controller = {};


controller.register = (req, res) => {
  const sql = 'INSERT INTO login (email, password, name, lastname, address, phone) VALUES (?)';
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error al encriptar contraseña" });
    const values = [
      req.body.email,
      hash,
      req.body.name,
      req.body.lastname,
      req.body.address,
      req.body.phone
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
  const sql = 'SELECT * FROM login WHERE email = ?';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, [req.body.email], (err, data) => {
      if (err) return res.json("Obi wan kenobi has failed us");
      if (data.length > 0) {
        bcrypt.compare(req.body.password.toString(), data[0].password, (err, result) => {
          if (err) return res.json({ Error: "Error al comparar contraseñas" });
          if (result) {
            const role = data[0].role;
            const name = data[0].name;
            const token = jwt.sign({ role, name }, 'MWOLD', { expiresIn: '1h' })
            res.cookie('token', token)
            return res.json({ Login: true, userRole: data[0].role, userName: data[0].name });
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
  jwt.verify(token, 'MWOLD', (err, decoded) => {
    if (err) return res.json({ Error: "Token invalido" });
    req.userRole = decoded.role;
    req.userName = decoded.name;
    next();
  });
  return res.json({ Status: "Success", userRole: req.userRole, userName: req.userName });
};

controller.logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ Status: "Success" });
};

module.exports = controller;