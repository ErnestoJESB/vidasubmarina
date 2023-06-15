const express = require('express')
const fs = require('fs');
const path = require('path');
const multer = require('multer')


const controller = {};


controller.register = (req, res) => {
  const sql = 'INSERT INTO login (email, password, name, lastname, address, phone) VALUES (?)';
  const values = [
    req.body.email,
    req.body.password,
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

};

controller.login = (req, res) => {
  const sql = 'SELECT * FROM login WHERE `email` = ? AND `password` = ?';

  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json("Error al iniciar sesión");
      }
      if(data.length > 0){
        return res.json("success");
      }else{
        return res.json("Usuario o contraseña incorrectos");
      }
    });
  });

};


module.exports = controller;