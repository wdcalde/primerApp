'use strict'

const { json } = require("body-parser");
const { validationResult } = require('express-validator');
var Usuarios = require('../models/usuarios');

var controller = {

    login: function (req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        };

        let login_info = req.body;

        Usuarios.findOne({ mail: login_info.mail, password: login_info.password }).exec((err, usuario) => {
            if (err) return res.status(500).json({
                status: 500, mensaje: err
            });
            if (!usuario) return res.status(200).json({
                status: 200, mensaje: "los datos no son válidos"
            });

            return res.status(200).json({ status: 200, data: usuario });

        });

    },
    logout: function(req, res){
        res.send('fuera');
    }
}

module.exports = controller;