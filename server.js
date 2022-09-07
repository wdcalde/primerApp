'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/curso', 
    { useNewUrlParser:true, useUnifiedTopology: true })
    .then(() => {
        console.log('conexión a la base de datos establecida con éxito');

        //crear el servidor
        var server = app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la url: http://localhost:" + port);
        });
    })
    .catch(err => console.log(err));