'use strict'

const express = require('express');
const api = express.Router();
const BrigadasCtrl = require('../controllers/brigadas');
const UserCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');

api.get('/brigadas', BrigadasCtrl.getBrigadas);

api.get('/brigadas/:brigadaid', BrigadasCtrl.getBrigada);

api.post('/brigadas', auth.isAuth, BrigadasCtrl.saveBrigadas);

api.put('/brigadas/:brigadaid', auth.isAuth, BrigadasCtrl.updateBrigadas);

api.delete('/brigadas/:brigadaid', auth.isAuth, BrigadasCtrl.deleteBrigadas);

module.exports = api;