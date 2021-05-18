const express = require('express')
// Esse componente que usa para criar rotas em arquivos separados
const router = express.Router()

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

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

// No final do arquivo precisa exportar o router
module.exports = router