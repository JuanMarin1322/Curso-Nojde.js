const { response, json } = require('express');

const { Categoria, Usuario } = require('../models/');


const crearCategoria = async ( req, res = response) => {

        const  nombre = req.body.nombre.toUpperCase();
        const categoriaDB = await Categoria.findOne({ nombre });
    
        if( categoriaDB ){
            return res.status(400).json({
                msg:`La categoria ${ categoriaDB.nombre }, ya existe`
            });
        }
    
        const data = {
            nombre,
            usuario : req.usuario._id
        }
        const categoria = new Categoria ( data );

        await categoria.save();
        
        res.status(201).json( categoria );

}

const obtenerCategorias = async ( req, res = response ) => {
    
      const [ total, categorias] = await Promise.all([ 
        Categoria.countDocuments(),
        Categoria.find().populate('usuario','nombre')
    
          
     ]);
 
     res.json({
         msg:"get API - Controlador",
 
         total, 
         categorias
        
         });
}

const obtenerCategoria = async ( req, res = response ) => {
    const { id } = req.params;

    const categoria = await Categoria.findById(id).populate('usuario','nombre');

    // if( !categoria){
    //     return res.status(401).json({
    //         msg:'La categoria no existe'
    //     });

    // }
    
    res.json({
        msg:"get API - Controlador",
        categoria
        });
}

const actualizarCategoria = async ( req, res = response ) => {
    
    const { id } = req.params;

    
    
    try {
        
        const  nombre  = req.body;
        const categoriaDB = await Categoria.findOne({ nombre });
        
        if( categoriaDB ){
            return res.status(400).json({
                msg:`La categoria ${ categoriaDB.nombre }, ya existe`
            });
        
    }

    } catch (error) {

    }

    const  nombreDB = req.body.nombre.toUpperCase();
    const categoria = await Categoria.findByIdAndUpdate( id, { nombre:nombreDB });

    console.log(categoria);
    // const usuarioAuth = req.usuario;
    return res.status(201).json({
        msg:'Actualziado',
        categoria
    });
 }

 const eliminarCategoria = async ( req, res = response) =>{

    const { id } = req.params;

    const categoria = await Categoria.findByIdAndUpdate( id,{ estado:false });

    res.json({
        msg:"Delete API - Controlador",
        categoria,
        });
 }


module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    eliminarCategoria
}