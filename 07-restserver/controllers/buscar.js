const { response } = require('express');
const { Usuario, Categoria,Producto } = require('../models');
const { ObjectId }=require('mongoose').Types;

const coleccionesPermitidas = [
    'usuarios',
    'categorias',
    'productos',
    'roles'
] 

const buscarUsuarios = async ( termino = '', res = response ) => {

    const esMongoID = ObjectId.isValid( termino);

    if( esMongoID ){

        const usuario =  await Usuario.findById( termino);
        return res.json({
            results : ( usuario ) ? [ usuario] : []
         })
    }

    const regex =  new RegExp( termino, 'i' )
    const usuarios = await Usuario.find( { 
        $or :[ 
                { nombre : regex }, 
                { correo: regex } ],
        $and : [  { estado : true } ]
        } );

    res.json({
        results :  usuarios 
     })
}

const buscarCategorias = async ( termino = '', res = response ) => {

    const esMongoID = ObjectId.isValid( termino);

    if( esMongoID ){

        const categoria =  await Categoria.findById( termino);
         return res.json({
            results : ( categoria ) ? [ categoria] : []
         })
    }

    const regex =  new RegExp( termino, 'i' )
    const categorias = await Categoria.find( { nombre: regex , estado: true } );

    res.json({
        results :  categorias 
     })
}

const buscarProductos = async ( termino = '', res = response ) => {

    const esMongoID = ObjectId.isValid( termino);

    if( esMongoID ){

        const producto =  await Usuario.findById( termino)
                                        .populate('categoria','nombre');
        
        returnres.json({
            results : ( producto ) ? [ producto ] : []
         })
    }

    
    const regex =  new RegExp( termino, 'i' )

    console.log(regex  );
    //POR CATEGORIA
    const categories = await Categoria.findOne({ nombre:  regex })
    console.log(categories   );
       if( categories ) { 

        const categoria = categories.id 
            console.log(categoria );
           const productos = await Producto.find( { categoria: new ObjectId(categoria) });
           console.log(productos);

           return res.json({
           results :  productos 
           })
       }
    

    const productos = await Producto.find( { 
        $or :[ 
                { nombre : regex }, 
               
            ],
        $and : [  { estado : true } ]
        } )
                .populate('categoria','nombre');;

    
    res.json({
        results :  productos 
     })
}
const buscar = ( req, res = response ) =>{

    const { coleccion, termino}  = req.params;

    if ( !coleccionesPermitidas.includes( coleccion) ){

        return res.status(400).json({

            msg :`Las colecciones permitidas son: ${coleccionesPermitidas} `
        })
    }

    switch (coleccion) {
        case "usuarios":
            buscarUsuarios(termino, res );
            break;
        case 'categorias':
            buscarCategorias(termino, res );
            break;
         case 'productos':
            buscarProductos( termino, res );
            break;
        
        default:
            res.status(500).json({
                
                msg: 'Se le olvido ahcer esta búsqueda'
            })
            
    }



}

module.exports = {

    buscar
}