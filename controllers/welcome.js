'use strict'

const { json } = require("body-parser");

var controller = {

    welcome: function(req, res){
        res.send('Hola mundo');
    }
}

module.exports = controller;