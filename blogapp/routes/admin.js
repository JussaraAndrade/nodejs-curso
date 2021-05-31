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
    var erros = []
    // Validação - não quero que o usuário envie formulários vázios
    // !req.body.nome; se não for enviado o nome

    /*
        !req.body.nome; se o campo nome for vazio

        OU

        typeof req.body.nome == undefined; se o tipo do campo nome for igual a undefined

        OU

        req.body.nome == null; se o nome for nulo

        Obs: irá registrar uma mensagem de erro

    */
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        // Toda array tem função de push, ele serve para colocar um novo dado dentro do array
        erros.push({texto: "Nome inválido"})
    }
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido"})
    }
    if(req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria é muito pequeno"})
    }
    // se existir mais de um erro
    if(erros.length > 0){
        res.render("admin/addcategorias", {erros: erros})
    }else{
        // Cria categoria no banco de dados
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
        new Categoria(novaCategoria).save().then(()=> {
            // Exibe uma mensagem que a categoria foi registrada com sucesso 
            req.flash("success_msg", "Categoria criada com sucesso!")

            // redirecionar para rota admin
            // Caso seja com sucesso irá redirecionar para rota de categorias
            res.redirect("/admin/categorias")
        }).catch((err) => {
            // É caso aconteça o erro apresenta a mensagem 
            req.flash("error_msg", "Houve um erro ao salvar a categoria, tente novamente!")
            
            // Redireciona para rota
            res.redirect("/admin")
        })
    }
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

// No final do arquivo precisa exportar o router
module.exports = router