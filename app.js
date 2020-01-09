'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const sucursales = require('./routes/index');
const brigadas = require('./routes/rute-brigadas');
const farmancias = require('./routes/rute-farmancias');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.hbs', hbs ({
    defaultLayout: 'default',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use('/api', sucursales);
app.use('/api', brigadas);
app.use('/api', farmancias);
app.get('/', (req, res) => {
    res.render('login');
});

module.exports = app;