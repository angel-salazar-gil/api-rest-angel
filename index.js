'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
// Variables de Entorno
require('dotenv').config({ path: 'variables.env' });

console.log(config.db);

////////////////////////////////////////////////////////////////////////
///////////// Coneccion a la Base de Datos ////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
function connect(){
    mongoose.connect('mongodb+srv://angelSalazar:Monoku_6@cluster0-toxjc.mongodb.net/test?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Conectado a la BD ...');

    app.listen( config.port, () => {
        console.log(`API REST Corriendo en el puerto ${config.port}`);
    });
}

connect();
*/
mongoose.connect('mongodb+srv://angelSalazar:Monoku_6@cluster0-toxjc.mongodb.net/test?retryWrites=true&w=majority', (err, res) => {
    useUnifiedTopology: true
    useNewUrlParser: true
    if(err) {
        return console.log(`Error al conectarse a la BD: ${err}`);
    };
    console.log('Conectado a la BD ...');

    app.listen( config.port, () => {
        console.log(`API REST Corriendo en el puerto ${config.port}`);
    });
});
