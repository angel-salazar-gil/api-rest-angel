'use strict'

const Sucursales = require('../models/Sucursales');

function getSucural(req, res) {
    console.log(`Contenido del parametro: ${req.params.sucursalesid}`);
    let sucursalid = req.params.sucursalesid;

    Sucursales.findById(sucursalid, (err, sucursales) =>{
        if(err) return res.status(500).send({menssage: `Error al realizar la peticion: ${err}`});
        if(!sucursales) return res.status(404).send({menssage: 'La solicitud no existe'});

        res.status(200).send({ sucursales });
    });
};

function getSucurales(req, res) {
    Sucursales.find({}, (err, sucursales) =>{
        if(err) return res.status(500).send({menssage: `Error al realizar la peticion: ${err}`});
        if(!sucursales) return res.status(404).send({message: 'No existen registros'});

        res.status(200).send({ sucursales });
    });
};

function saveSucursales(req, res) {
    console.log('POST /api/sucursales');
    console.log(req.body);

    let sucursales = new Sucursales();
    sucursales.descripcion = req.body.descripcion;
    sucursales.horario = req.body.horario;
    sucursales.telefono = req.body.telefono;
    sucursales.direccion = req.body.direccion;
    sucursales.longitud = req.body.longitud;
    sucursales.latitud = req.body.latitud;

    sucursales.save((err, sucursalesStored) => {
        if (err) res.status(500).send({message: `Error al almacenar en la BD: ${err}`});

        res.status(200).send({sucursales: sucursalesStored});
    });
    //res.status(200).send({message: 'La sucursal se ha registrado'});
};

function updateSucursales(req, res) {
    let sucursalid = req.params.sucursalesid;
    let update = req.body;

    Sucursales.findByIdAndUpdate(sucursalid, update, (err, sucursalesUpdate) => {
        if(err) res.status(500).send({menssage: `Error al actualizar la sucursal: ${err}`});

        res.status(200).send({ menssage: 'La informacion a sido actualizada' });
    });
};

function deleteSucursales(req, res) {
    console.log(`Contenido del parametro: ${req.params.sucursalesid}`);
    let sucursalid = req.params.sucursalesid;

    Sucursales.findById(sucursalid, (err, sucursales) => {
        if(err) res.status(500).send({menssage: `Error al eliminar la sucursal: ${err}`});

        sucursales.remove(err => {
            if(err) res.status(500).send({menssage: 'Error al borrar en la Bade de Datos'});

            res.status(200).send({menssage: 'La sucursal a sido eliminado...'});
        });
    });
};

module.exports = {
    getSucural,
    getSucurales,
    saveSucursales,
    updateSucursales,
    deleteSucursales
};