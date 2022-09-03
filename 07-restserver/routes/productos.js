const { Router } = require('express');
const { check }= require('express-validator');

const { 
    crearProducto, 
    obtenerProductos,
    obtenerProducto, 
    eliminarProducto, 
    actualizarProducto} = require('../controllers/productos');

const { idProductoExiste } = require('../helpers/db-validator');

const { 
    validarJWT, 
    validarCampos } = require('../middlewares');

const router = Router();

router.get('/',obtenerProductos);

router.get('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idProductoExiste),
    validarCampos
],obtenerProducto);

//Crear cateogria - privado - token valido 
router.post('/',[ 
    validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],crearProducto );

router.put('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idProductoExiste),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validarCampos
],actualizarProducto);

router.delete('/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( idProductoExiste),
    validarCampos
],eliminarProducto);


module.exports = router;