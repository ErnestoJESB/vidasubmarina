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
        res.send('Usuario registrado');
        return res.json(result);
      });
    });
    
  };


module.exports = controller;