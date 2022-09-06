'use strict'

var Alumnos = require('../models/alumnos')

var controller = {
    alumnos: function (req, res) {
        
        Alumnos.find({}).exec((err, alumnos) => {
            if (err) return res.status(500).json({
                status: 500, mensaje: err
            });
            console.log(alumnos);
        });

    },
};

module.exports = controller;