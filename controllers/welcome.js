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
        let cal2 = 6;
        let cal3 = 4;

        let final = (cal1 + cal2 + cal3) / 3;

        if (final < 6) {
            return res.status(400).json({
                status: 200,
                cal_final: final
            });
        } else {
            return res.status(200).json({
                status: 200,
                cal_final: final
            });
        }


    },

    crear_alumno: function(req, res){
        let user_info = req.body;
        console.log(user_info);
        res.send('creamos un alumno ' + user_info.nombre + ' Edad ' + user_info.edad);
    },

    actualizar_alumno: function(req, res){
        res.send('Actualizamos un alumno');
    },

    eliminar_alumno: (req, res) => {
        res.send('Eliminamos un alumno');
    }
}

module.exports = controller;