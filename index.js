'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

////////////////////////////////////////////////////////////////////////
///////////// Coneccion a la Base de Datos ////////////////////////////
//////////////////////////////////////////////////////////////////////

mongoose.connect(config.db, (err, res) => {
    if(err) {
        return console.log(`Error al conectarse a la BD: ${err}`);
    };
    console.log('Conectado a la BD ...');

    app.listen( config.port, () => {
        console.log(`API REST Corriendo en el puerto ${config.port}`);
    });
});