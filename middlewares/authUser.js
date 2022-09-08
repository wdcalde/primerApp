'use strict'

const jwt = require('jsonwebtoken');

const middlewares = {
    userProtectUrl: function(req, res, next){
        const token = req.headers['access-token'];
        if(token){
            jwt.verify(token, 'PeAFOr40XilBsMPa5IJVt7EMZC3pZI64174mLbT9ugmUnT0duq', (err, decoded) =>{
                if(err){
                    return res.status(403).json({message: 'Token no válido'})
                }else{
                    req.decoded = decoded;
                    next();
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