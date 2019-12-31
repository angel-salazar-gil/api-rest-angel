'use strict'

const Brigadas = require('../models/Brigadas');

function getBrigada(req, res) {
    let brigadaid = req.params.brigadaid;

    Brigadas.findById(brigadaid, (err, brigadas) => {
        if(err) return res.status(500).send({menssage: `Error al realizar la peticion: ${err}`});
        if(!brigadas) return res.status(404).send({menssage: 'La sulicitud no existe'});

        res.status(200).send({ brigadas });
    });
};

function getBrigadas(req, res) {
    Brigadas.find({}, (err, brigadas) => {
        if(err) return res.status(500).send({menssage: `Error al realizar la peticion: ${err}`});
        if(err) return res.status(404).send({menssage: 'No existen registros en la Base de Datos'});

        res.status(200).send({ brigadas });
    });
};

function saveBrigadas(req, res) {
    console.log(req.body);

    let brigadas = new Brigadas();
    brigadas.tipo = req.body.tipo;
    brigadas.descripcion = req.body.descripcion;
    brigadas.horario = req.body.horario;
    brigadas.direccion = req.body.direccion;
    brigadas.longitud = req.body.longitud;
    brigadas.latitud = req.body.latitud;

    brigadas.save((err, brigadasStored) => {
        if(err) res.status(500).send({menssage: `Error al almacenar en la Base de Dastos: ${err}`});

        res.status(200).send({ brigadas: brigadasStored });
    });
};

function updateBrigadas(req, res) {
    let brigadaid = req.params.brigadaid;
    let update = req.body;

    Brigadas.findByIdAndUpdate(brigadaid, update, (err) => {
        if(err) res.status(500).send({menssage: `Error al actualizar la brigada: ${err}`});

        res.status(200).send({menssage: 'La informacion a sido actualizada'});
    });
};

function deleteBrigadas(req, res) {
    let brigadaid = req.params.brigadaid;

    Brigadas.findById(brigadaid, (err, brigadas) => {
        if(err) res.status(500).send({menssage: `Error al eliminar la brigada: ${err}`});

        brigadas.remove(err => {
            if(err) res.status(500).send({menssage: `Error al borrar en la Base de Datos. ${err}`});

            res.status(200).send({menssage: 'La brigada a sido eliminada...'});
        });
    });
};

module.exports = {
    getBrigada,
    getBrigadas,
    saveBrigadas,
    updateBrigadas,
    deleteBrigadas
};