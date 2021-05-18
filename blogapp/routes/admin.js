const express = require('express')
// Esse componente que usa para criar rotas em arquivos separados
const router = express.Router()

// Grupo de rotas
router.get('/', (req, res) => {
    res.send('Página principal do painel ADM')
})

router.get('/posts', (req, res) => {
    res.send('Página de posts')
})

router.get('/categorias', (req, res) =>{
    res.send("Página de categoria")
})

// No final do arquivo precisa exportar o router
module.exports = router