const { Router } = require('express');
const { check }= require('express-validator');
const { 
    crearCategoria, 
    obtenerCategorias, 
    obtenerCategoria,
    actualizarCategoria,
    eliminarCategoria} = require('../controllers/categorias');

const { 
    validarJWT, 
    validarCampos, 
    esAdminRole} = require('../middlewares');

const { idCategoriaExiste } = require('../helpers/db-validator');

const router = Router();


//Obtener todas las categorias - publicos
router.get('/', obtenerCategorias);

//Obtener una categorias por id - publico
router.get('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idCategoriaExiste),
    validarCampos
], obtenerCategoria);

//Crear cateogria - privado - token valido 
router.post('/',[ 
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

router.put('/:id',[
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idCategoriaExiste),
    validarCampos
], actualizarCategoria);

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idCategoriaExiste),
    validarCampos
    
],eliminarCategoria
);



module.exports = router;