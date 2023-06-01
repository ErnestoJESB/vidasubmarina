const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

//importando routes
const customersRoutes = require('./routes/customer');
const condominioRoutes = require('./routes/condominio');


//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: 'Soberano15',
    port: 3306,
    database: 'customersdb'
},'single'))
app.use(express.urlencoded({extended:false}))

// Configurar el middleware body-parser
app.use(bodyParser.json()); // Para analizar el cuerpo de la solicitud en formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Para analizar el cuerpo de la solicitud en formato de datos de formulario


//Routes
app.use('/', customersRoutes);
app.use('/', condominioRoutes);

app.listen(3000, () => {
    console.log('It´s works')
})

app.use(cors())
app.use(express.static(path.join(__dirname,'dbimages')))
app.use(express.static(path.join(__dirname,'condominios')))