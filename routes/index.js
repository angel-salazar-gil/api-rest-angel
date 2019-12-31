'use strict'

const express = require('express');
const api = express.Router();
const SucursalesCtrl = require('../controllers/sucursales');
const UserCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');

////////////////////////////////////////////////////////////////////////
//////////// Rutas de Acceso //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
app.get('/clinicas', (req, res) => {
    res.send({ menssage: 'Hola Mndo!' });
});
*/

api.get('/sucursales', SucursalesCtrl.getSucurales);

api.get('/sucursales/:sucursalesid', SucursalesCtrl.getSucural);

api.post('/sucursales', auth.isAuth, SucursalesCtrl.saveSucursales);

api.put('/sucursales/:sucursalesid', auth.isAuth, SucursalesCtrl.updateSucursales);

api.delete('/sucursales/:sucursalesid', auth.isAuth, SucursalesCtrl.deleteSucursales);

api.post('/signup', UserCtrl.signUp);

api.post('/signin', UserCtrl.signIn);

api.get('/private', auth.isAuth, (req, res) => {
    res.status(200).send({ menssage: 'Tienes acceso' });
});

module.exports = api;