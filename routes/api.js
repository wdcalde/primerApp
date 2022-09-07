'use strict'
const express = require('express');
const api = express.Router();
const { body } = require('express-validator');

var WelcomeController = require('../controllers/welcome');
var AlumnosController = require('../controllers/alumnos');

api.get('/', WelcomeController.welcome);
api.get('/alumnos', AlumnosController.alumnos);
api.get('/alumno/:n_cuenta', AlumnosController.alumno);
api.post('/alumno', AlumnosController.crear_alumno);

module.exports = api;