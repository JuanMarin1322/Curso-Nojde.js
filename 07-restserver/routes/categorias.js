const { Router } = require('express');
const { check }= require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


//Obtener todas las categorias - publico
router.get('/', ( req, res) => {

    res.json('GET');
});
//Obtener una categorias por id - publico
router.get('/:id', ( req, res) => {

    res.json('GET- por id')
});

//Crear cateogria - privado - token valido 
router.post('/', ( req, res) => {

    res.json('POST')
});

router.put('/:id', ( req, res) => {

    res.json('PUT')
});
router.delete('/:id', ( req, res) => {

    res.json('DELETE')
});



module.exports = router;