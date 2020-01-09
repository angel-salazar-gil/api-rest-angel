'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmanciaSchema = new Schema ({
    imagen: String,
    farmancia: String,
    direccion: String,
    longitud: String,
    latitud: String
});

module.exports = mongoose.model('Farmancias', FarmanciaSchema);