'use strict'

const mongoose = require('mongoose');
const User = require('../models/Users');
const service = require('../services');

//Funcion para el registro
function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    });

    user.save((err) => {
        if(err) res.status(500).send({menssage: `Error al ingresar el usuario: ${err}`});

        return res.status(200).send({ token: service.createToken(user) });
    });
};

//Funcion para la autentificacion
function signIn(req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if(err) return res.status(500).send({ menssage: `Error: ${err}`});
        if(!user) return res.status(404).send({ menssage: 'No existe el usuario' });

        req.user = user;
        res.status(200).send({
            menssage: 'Ta has loguado correctamente',
            token: service.createToken(user)
        });
    });
};

module.exports = {
    signUp,
    signIn
};