// Esse componente que usa para criar rotas em arquivos separados
const router = require('express').Router()
const mongoose = require("mongoose")
require('../models/Categoria')
// função de referência da variável
const Categoria = require("../models/Categoria")


// Grupo de rotas
router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Página de posts')
})

router.get('/categorias', (req, res) =>{
    res.render('admin/categorias')
})

router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Categoria(novaCategoria).save().then(()=> {
        console.log(novaCategoria);
        console.log('Categoria salva com sucesso!');
    }).catch((err) => {
        console.log('Erro ao salvar categoria!' +err);
    })
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

// No final do arquivo precisa exportar o router
module.exports = router