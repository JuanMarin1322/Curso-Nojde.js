const { response, json } = require('express');

const {
     Producto, 
     Categoria } = require('../models/');

const crearProducto = async ( req, res = response) => {

    

    let { nombre, categoria, ...resto } = req.body;

    nombre = req.body.nombre.toUpperCase();

    const productoDB = await Producto.findOne({ nombre });

    if( productoDB ){
        return res.status(400).json({
            msg:`El producto  ${ productoDB.nombre }, ya existe en la base de datos`
        });
    }
   
    categoria = req.body.categoria.toUpperCase();

    console.log(categoria);
    const categoriaDB = await Categoria.findOne({ nombre:categoria  });
    console.log(categoriaDB)
    if( !categoriaDB ){
        return res.status(400).json({
            msg:`La categoria ${ categoria  }, no existe`
        });
    }
    
    const data = {
        nombre,
        categoria: categoriaDB._id,
        usuario : req.usuario._id,
        ...resto

    }

    const producto = new Producto ( data );

   await producto.save();
    
    res.status(201).json( producto );

}
const obtenerProductos = async ( req, res = response ) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total,  productos] = await Promise.all([ 
      Producto.countDocuments(query),
      Producto.find(query)
      .populate('usuario','nombre')
      .populate('categoria','nombre')
      .skip( Number( desde ) )
      .limit(Number( limite ))
        
   ]);

   res.json({
       msg:"get API - Controlador",

       total, 
       productos
      
       });
}

const obtenerProducto = async ( req, res = response) => {

    const { id } = req.params;

    const producto = await Producto.findById(id)
                                    .populate('usuario','nombre')
                                    .populate('categoria','nombre')

 
    res.json({
        msg:"get PRODCUTO",
        producto
        });
}
const actualizarProducto = async ( req, res = response ) => {
   

    const { id } = req.params;

    const{  categoria, usuario,  ...data } =req.body;

    data.usuario = req.usuario._id;

    const nombre = data.nombre.toUpperCase();

    const productoDB = await Producto.findOne({ nombre });
        
    
    if(  productoDB ){
            return res.status(400).json({
                msg:`El producto con nombre: ${ productoDB.nombre }, ya existe`
            });
            
        }
        
        try {
                
            const categoriaBuscar = categoria.toUpperCase();

            const productoCategoriaDB = await Categoria.findOne({ nombre:categoriaBuscar  });
                

            
            if(  !productoCategoriaDB ){
                    return res.status(400).json({
                            msg:`La categoria : ${ categoria }, no existe`
                    });
                    }
                
                    
            data.categoria = productoCategoriaDB.id
            data.usuario = req.usuario._id;
        } catch (error) {
            
        }

  

   const producto = await Producto.findByIdAndUpdate( id, data , { new : true});
    
    return res.status(201).json({
        msg:'Actualziado',
         producto 

    });
 

 }

 const eliminarProducto = async( req, res = response ) =>{

    const { id } = req.params

    const producto = await Producto.findByIdAndUpdate( id,{ estado:false });

    res.json({
        msg:"Ok, Eliminado",
        producto,
        });


 }

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto

}