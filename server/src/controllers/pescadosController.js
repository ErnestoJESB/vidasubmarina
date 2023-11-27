const express = require('express')
const fs = require('fs');
const path = require('path');
const multer = require('multer')

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

controller.idproducto = (req, res) => {
  const { idproveedor } = req.params;
  const sql = `SELECT * FROM vidasub.productos WHERE idempresa = ${idproveedor};`;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};

/* basico */
controller.productos = (req, res) => {
  const sql = 'SELECT * FROM vidasub.productos ORDER BY idproductos DESC;';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
}

controller.producto = (req, res) => {
  const { producto } = req.params;
  const sql = `SELECT * FROM vidasub.productos WHERE idproductos = ${producto};`;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};

controller.empresa = (req, res) => {
  const { idUser } = req.params;
  const sql = `SELECT * FROM vidasub.empresa WHERE user_id = ${idUser};`;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};

controller.empresaprod = (req, res) => {
  const { idUser } = req.params;
  const sql = `SELECT * FROM vidasub.productos WHERE idempresa = ${idUser};`;
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
};


controller.productosname = (req, res) => {
  const sql = 'SELECT nombre, image FROM vidasub.productos;';
  req.getConnection((err, conn) => {
    if (err) return res.status(500).send('Error del servidor');
    conn.query(sql, (err, result) => {
      if (err) return res.json("Error al obtener condominios");
      return res.json(result);
    });
  });
}


/* CRUD productos */

/* Guarda la imagen y datos */
const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, '../productos'),
  filename: (req, file, cb) => {
    const originalname = file.originalname.replace(/[^\w.-]/g, ''); // Eliminar espacios en blanco
    cb(null, 'VidaSub-Producto' + originalname);
  }
});

const fileUpload = multer({
  storage: diskstorage
}).single('image');

controller.addProducto = (req, res) => {
  fileUpload(req, res, (err) => {
    if (err) {
      console.error('Error uploading image:', err);
      return res.status(500).send('Error uploading image');
    }
    console.log(req.body);
    const filename = req.file.filename;
    const data = req.body;
    data.image = filename;
    console.log(data);
    req.getConnection((err, conn) => {
      if (err) {
        console.error('Server error:', err);
        return res.status(500).send('Server error');
      }


      conn.query('INSERT INTO productos SET ?', data, (err, rows) => {
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