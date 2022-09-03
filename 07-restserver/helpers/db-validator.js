const { Role, Usuario, Categoria, Producto  }= require('../models');

const esRolValido =async(rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if( !existeRol){

            throw new Error(`El rol ${rol} no está registrado en la BD`);
    }

}

const emailExiste = async correo  => {

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
            throw new Error(`El correo: ${correo} ya está registrado `);
    }

}

const idExiste = async id  => {

    const existeID = await Usuario.findById(id);
    if ( !existeID){
            throw new Error(`El ID: ${id} no se encuentra en la base de datos `);
    }

}

const idCategoriaExiste = async id  => {

    const existeID = await Categoria.findById(id);
    if ( !existeID){
            throw new Error(`El ID: ${id} no se encuentra en la base de datos `);
    }
}

const idProductoExiste = async id  => {

        const existeID = await Producto.findById(id);
        if ( !existeID){
                throw new Error(`El ID: ${id} no se encuentra en la base de datos `);
        }
    
   

}


module.exports = {
    esRolValido,
    emailExiste,
    idExiste,
    idCategoriaExiste,
    idProductoExiste
}

