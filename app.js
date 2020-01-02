'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const api = require('./routes/index');
const api2 = require('./routes/rute-brigadas');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.hbs', hbs ({
    defaultLayout: 'default',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use('/api', api);
app.use('/api', api2);
app.get('/', (req, res) => {
    res.render('login');
});

module.exports = app;