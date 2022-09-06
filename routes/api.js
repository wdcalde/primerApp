'use strict'
const express = require('express');
const api = express.Router();

var WelcomeController = require('../controllers/welcome');

api.get('/', WelcomeController.welcome);

module.exports = api;