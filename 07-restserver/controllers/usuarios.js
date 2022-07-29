const { response} = require('express');

const usuariosGet =  (req, res = response) => {
    
    const {q,nombre,f='No F' }= req.query;
    res.json({
        msg:"get API - Controlador",
        q,
        nombre,
        f

        });
    }
      
const usuariosPut =  (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg:"Put API - Controlador",
        id
        });
    }
 
const usuariosPost =  (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg:"Post API - Controlador",
        nombre,
        edad
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


