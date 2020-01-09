'use strict'

const Farmancias = require('../models/Farmancias');

function getFarmancia(req, res) {
    let farmanciaid = req.params.farmanciaid;

    Farmancias.findById(farmanciaid, (err, farmancias) =>{
        if (err) return res.status(500).send({menssage: `Error al realizar la peticion ${err}`});
        if (!farmancias) return res.status(404).send({menssage: 'La solicitud no existe'});

        res.status(200).send( farmancias );
    });
}

function getFarmancias(req, res) {
    Farmancias.find({}, (err, farmancias) => {
        if (err) return res.status(500).send({menssage: `Error al realizar la peticion ${err}`});
        if (!farmancias) return res.status(404).send({menssage: 'No existen registro en la BD'});

        res.status(200).send( farmancias );
    });
}

function saveFarmancias(req, res) {
    console.log(req.body);

    let farmancias = new Farmancias();
    farmancias.imagen = req.body.imagen;
    farmancias.farmancia = req.body.farmancia;
    farmancias.direccion = req.body.direccion;
    farmancias.longitud = req.body.longitud;
    farmancias.latitud = req.body.latitud;

    farmancias.save((err, farmanciasStored) => {
        if (err) res.status(500).send({menssage: `Error al almacenar en la BD: ${err}`});

        res.status(200).send({ farmancias: farmanciasStored });
    });
}

function updateFarmancias(req, res) {
    let farmanciaid = req.params.farmanciaid;
    let update = req.body;

    Farmancias.findByIdAndUpdate(farmanciaid, update, (err, farmanciasUpdate) => {
        if (err) res.status(500).send({menssage: `Error al acualizar la informacion: ${err}`});

        res.status(200).send({ menssage: 'La informacion ha sido actualizada' });
    });
}

function deleteFarmancias(req, res) {
    let farmanciaid = req.params.farmanciaid;

    Farmancias.findById(farmanciaid, (err, farmancias) => {
        if (err) res.status(500).send({ menssage: `Error al eliminar la farmancia: ${err}` });

        farmancias.remove(err => {
            if (err) res.status(500).send({ menssage: 'Error al borrar de la Base de Datos' });

            res.status(200).send({ menssage: 'La data ha sido eliminada exitosamente' });
        });
    });
}

module.exports = {
    getFarmancia,
    getFarmancias,
    saveFarmancias,
    updateFarmancias,
    deleteFarmancias
}