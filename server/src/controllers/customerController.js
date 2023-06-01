const express = require('express')
const fs = require('fs');
const path = require('path');
const multer = require('multer')

const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customer', (err, customers)=>{
            if(err){
                res.json(err);
            }
            res.render('customers',{
                data: customers
            })
        })
    })
};



/* controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customer set ?', [data], (err, customer =>{
            res.redirect('/')
        }))
    })
} */

/* controller.save = (req, res) => {

  const data = req.body;
  const image = req.files && req.files.image;

  if (image) {
    const uploadDir = path.join(__dirname, 'condominios_images');
    // Verificar si el directorio existe
    if (!fs.existsSync(uploadDir)) {
      // Crear el directorio si no existe
      fs.mkdirSync(uploadDir);
    }
    const imageName = Date.now() + '_condominio_' + image.name; // Nombre único para la imagen
    const imagePath = path.join(uploadDir, imageName); // Ruta completa de la imagen
    data.image_name = imageName;


    image.mv(imagePath, (err) => {
      if (err) {
        console.error('Error uploading image:', err);
      } else {
        // Aquí puedes utilizar el `imagePath` para guardar la ruta de la imagen en la base de datos
        data.image_path = imagePath;

        req.getConnection((err, conn) => {
            conn.query('INSERT INTO customer SET ?', data, (err, customer) => {
              if (err) {
                console.error('Error inserting customer:', err);
              } else {
                res.redirect('/');
              }
            });
          });
      }
    });
  } else {
    // Resto del código para insertar los datos en la base de datos y redireccionar
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer SET ?', data, (err, customer) => {
          if (err) {
            console.error('Error inserting customer:', err);
          } else {
            res.redirect('/');
          }
        });
      });
  }
};
 */


/* Guarda la imagen y datos */
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
      cb(null, 'MWOLD' + '-condominios-' + file.originalname);
    }
  });
  
  const fileUpload = multer({
    storage: diskstorage
  }).single('image');
  
  controller.save = (req, res) => {
    fileUpload(req, res, (err) => {
      if (err) {
        console.error('Error uploading image:', err);
        return res.status(500).send('Error uploading image');
      }
      console.log(req.file);
      const data = req.body;
  
      req.getConnection((err, conn) => {
        if (err) {
          console.error('Server error:', err);
          return res.status(500).send('Server error');
        }
  
        const type = req.file.mimetype;
        const name_image = req.file.originalname;
        const data_image = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename));
  
        data.type = type;
        data.name_image = name_image;
        data.data_image = data_image;
  
        conn.query('INSERT INTO customer SET ?', data, (err, rows) => {
          if (err) {
            console.error('Error inserting image:', err);
            return res.status(500).send('Error inserting image');
          }
  
          res.send('Image saved!');
        });
      });
    });
  };


    controller.get = (req, res) => {
      req.getConnection((err, conn) => {
          if (err) return res.status(500).send('server error');

          const query = 'SELECT * FROM customer';
          conn.query(query, (err, rows) => {
              if (err) return res.status(500).send('server error');
              
              const imageList = [];

              rows.forEach((img) => {
                  const imageName = img.id + '-reporte.png';
                  const imagePath = path.join(__dirname, '../dbimages/', imageName);
                  
                  if (img.data_image) {
                      fs.writeFileSync(imagePath, img.data_image);
                      
                      const image = {
                          id: img.id,
                          name: img.name,
                          phone: img.phone,
                          address: img.address,
                          imageName: imageName,
                      };

                      imageList.push(image);
                  }
              });

              res.json(imageList);
          });
      });
  };

/* Fin guardar img */  


controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err,rows)=>{
            res.redirect('/');
        })
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            res.render('customers_edit',{
                data: customer[0]
            })
        })
    })
}

controller.update = (req , res) => {
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?',[newCustomer, id], (err, rows) => {
            res.redirect('/');
        })
    })
}
module.exports = controller;