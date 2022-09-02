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
    validarCampos } = require('../middlewares');

const { idCategoriaExiste } = require('../helpers/db-validator');

const router = Router();


//Obtener todas las categorias - publicos
router.get('/', obtenerCategorias);

//Obtener una categorias por id - publico
router.get('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idCategoriaExiste),

], obtenerCategoria);

//Crear cateogria - privado - token valido 
router.post('/',[ 
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

router.put('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idCategoriaExiste),

], actualizarCategoria);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idCategoriaExiste),
],eliminarCategoria
);



module.exports = router;