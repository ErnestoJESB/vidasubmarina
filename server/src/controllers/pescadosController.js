const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



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
  
  
  module.exports = controller;