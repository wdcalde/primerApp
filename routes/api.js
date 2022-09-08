'use strict'
const express = require('express');
const api = express.Router();
const { body } = require('express-validator');

var WelcomeController = require('../controllers/welcome');
var AlumnosController = require('../controllers/alumnos');

api.get('/', WelcomeController.welcome);

api.get('/alumnos', AlumnosController.alumnos);

api.get('/alumno/:n_cuenta', AlumnosController.alumno);

api.post('/alumno', [
    body('genero').not().isEmpty(),
    body('n_cuenta').not().isEmpty(),
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty()
], AlumnosController.crear_alumno);

api.put('/alumno/:n_cuenta', [
    body('genero').not().isEmpty(),
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty()
], AlumnosController.update_alumno);

api.delete('/alumno/:n_cuenta', AlumnosController.delete_alumno);


module.exports = api;    