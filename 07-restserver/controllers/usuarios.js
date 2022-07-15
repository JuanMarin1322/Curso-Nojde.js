const { response} = require('express');

const usuariosGet =  (req, res = response) => {
    res.json({
        msg:"get API - Controlador"
        });
    }
      
const usuariosPut =  (req, res = response) => {
    res.json({
        msg:"Put API - Controlador"
        });
    }
 
const usuariosPost =  (req, res = response) => {
    res.json({
        msg:"Post API - Controlador"
        });
    }   

const usuariosDelete =  (req, res = response) => {
    res.json({
        msg:"Delete API - Controlador"
        });
    }  

module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}   


