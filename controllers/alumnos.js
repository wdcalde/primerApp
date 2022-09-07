'use strict'
const { validationResult } = require('express-validator');
var Alumnos = require('../models/alumnos');

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
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        
        let user_info = req.body;

        Alumnos.findOne({ n_cuenta: user_info.n_cuenta }).exec((err, alumno) => {
            if (err) return res.status(500).json({
                status: 500, mensaje: err
            });
            if (alumno) return res.status(200).json({
                status: 500, mensaje: "el alumno ya existe"
            });
            let alumnos_model = new Alumnos();

            alumnos_model.n_cuenta = user_info.n_cuenta;
            alumnos_model.nombre = user_info.nombre;
            alumnos_model.edad = user_info.edad;
            alumnos_model.genero = user_info.genero;

            alumnos_model.save((err, alumnoStored) => {
                if (err) return res.status(500).json({
                    status: 500, mensaje: err
                });
                if (!alumnoStored) return res.status(200).json({
                    status: 500, mensaje: "no grabó el alumno"
                });
                return res.status(200).json({ status: 200, message: "usuario almacenado" });
            });
        });

    }
};

module.exports = controller;