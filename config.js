// Variables de Entorno
require('dotenv').config({ path: 'variables.env' });
// Puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

module.exports = {
    port: (host, port),
    db: 'mongodb+srv://angelSalazar:Monoku_6@cluster0-toxjc.mongodb.net/api-database?retryWrites=true&w=majority',
    //db: process.env.MONGODB || process.env.DB_URL,
    SECRET_TOKEN: '23DPR0669H'
};