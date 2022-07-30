const { response} = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');
const { validarCampos } = require('../middlewares/validar-campos');


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
 
const usuariosPost =  async  (req, res = response) => {


 

    const { nombre, correo, password, rol} = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol});


    //Verificar que el correo existe

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){

            return res.status(400).json({

                msg: 'El correo ya esta registrado'
            })
    }

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password =bcryptjs.hashSync( password, salt);
    
    //Guardar en base de datos
    await usuario.save();
    
    res.json({
        msg:"Post API - Controlador",
        usuario
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


