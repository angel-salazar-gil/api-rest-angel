'use strict'

const express = require('express');
const api = express.Router();
const FarmanciasCtrl = require('../controllers/farmancias');
const auth = require('../middlewares/auth');

api.get('/farmancias', FarmanciasCtrl.getFarmancias);

api.get('/farmancias/:farmanciaid', FarmanciasCtrl.getFarmancia);

api.post('/farmancias', auth.isAuth, FarmanciasCtrl.saveFarmancias);

api.put('/farmancias/:farmanciaid', auth.isAuth, FarmanciasCtrl.updateFarmancias);

api.delete('/farmancias/:farmanciaid', auth.isAuth, FarmanciasCtrl.deleteFarmancias);

module.exports = api;