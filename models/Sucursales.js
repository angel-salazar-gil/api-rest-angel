'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SucursalSchema = new Schema({
    descripcion: String,
    horario: String,
    telefono: Number,
    direccion: String,
    imagen: String,
    longitud: String,
    latitud: String
});

module.exports = mongoose.model('Sucursales', SucursalSchema);