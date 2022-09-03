'use strict'

var controller = {

    welcome: function(req, res){
        res.send('Hola mundo');
    },

    alumnos: function(req, res){
        res.send('Mi listado de alumnos');
    },

    alumno: function(req, res){

        let cal1 = 5;
        let cal2 = 8;
        let cal3 = 10;

        let prom = (cal1 + cal2 + cal3) / 3;

        res.send('La calificación promedio es: ' + prom);

    },

    crear_alumno: function(req, res){
        res.send('creamos un alumno');
    },

    actualizar_alumno: function(req, res){
        res.send('Actualizamos un alumno');
    },

    eliminar_alumno: (req, res) => {
        res.send('Eliminamos un alumno');
    }
}

module.exports = controller;