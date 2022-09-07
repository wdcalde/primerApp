'use strict'

var Alumnos = require('../models/alumnos')

var controller = {
    alumnos: function (req, res) {
        
        Alumnos.find({}).exec((err, alumnos) => {
            if (err) return res.status(500).json({
                status: 500, mensaje: err
            });
            if (!alumnos) return res.status(200).json({
                status: 500, mensaje: "no hay alumnos para listar"
            });
            return res.status(200).json({ status: 200, data: alumnos });
        });
    },
    alumno: function (req, res) {

        let n_cuenta = req.params.n_cuenta;
        Alumnos.findOne({n_cuenta: n_cuenta}).exec((err, alumno) => {
            if (err) return res.status(500).json({
                status: 500, mensaje: err
            });
            if (!alumno) return res.status(200).json({
                status: 500, mensaje: "el alumno no existe"
            });
            return res.status(200).json({ status: 200, data: alumno });
        });

    },
    crear_alumno: function (req, res) {
        let user_info = req.body;
        

    },
};

module.exports = controller;