const express = require('express')
const fs = require('fs');
const path = require('path');
const multer = require('multer')
const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const { verify } = require('crypto');



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


/* controller.register = (req, res) => {
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
          return res.json({ Error: "Error al registrar usuario" });
        }
        return res.json({ Status: "Success" });
      });
    });
  })
}; */



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
            const name = data[0].name;
            const token = jwt.sign({ name }, 'MWOLD', { expiresIn: '1h' })
            res.cookie('token', token, { httpOnly: true })
            return res.json({ Login: true, username: data[0].name });
          }
          return res.json({ Login: false });
        });
      } else {
        return res.json({ Login: false });
      }
    });
  });

};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ valid: false });
  jwt.verify(token, 'MWOLD', (err, decoded) => {
    if (err) return res.json({ valid: false });
    req.username = decoded.name;
    next();
  });
};

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ valid: false });
  jwt.verify(token, 'MWOLD', (err, decoded) => {
    if (err) return res.json({ valid: false });
    req.username = decoded.name;
    next();
  });
};

controller.auth = verifyToken, (req, res) => {
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username });
  } else {
    return res.json({ valid: false });
  }
};

module.exports = controller;