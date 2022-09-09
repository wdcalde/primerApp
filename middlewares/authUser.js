'use strict'

const jwt = require('jsonwebtoken');
const sessions = require('../models/sessions');

let Sessions = require('../models/sessions');

const middlewares = {
    userProtectUrl: function(req, res, next){
        const token = req.headers['access-token'];
        if(token){
            jwt.verify(token, 'PeAFOr40XilBsMPa5IJVt7EMZC3pZI64174mLbT9ugmUnT0duq', (err, decoded) =>{
                if(err){
                    return res.status(403).json({message: 'Token no válido'})
                }else{
                    req.decoded = decoded;

                    Sessions.findOne({ user_id: req.decoded.user_id, jwt: token}).exec((err, session)=>{
                        if(err) return res.status(500).send({mensaje: "Error al devolver los datos"});
                        if(!session) return res.status(404).send({mensaje: "Los datos de autenticación no son válidos"});
                        next();
                    });
                }
            })

        }else{
            res.status(403).send({
                message: "Token no valida"
            })
        };
    }
};

module.exports = middlewares;