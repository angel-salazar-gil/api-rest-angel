'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrigadasSchema = new Schema({
    tipo: String,
    descripcion: String,
    horario: String,
    direccion: String,
    longitud: String,
    latitud: String
});

module.exports = mongoose.model('Brigadas', BrigadasSchema);