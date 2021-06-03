// Esse componente que usa para criar rotas em arquivos separados
const router = require('express').Router()
const mongoose = require("mongoose")
require('../models/Categoria')
// função de referência da variável
const Categoria = require("../models/Categoria")
const validaCampos = require("../validator.js")


// Grupo de rotas
router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Página de posts')
})

// Lista
router.get('/categorias', (req, res) => {
    // find(); é uma função que vai listar todos os documentos que existe, ou seja, toda categoria que existe
    // sort(); listar os post pelo campo date em ordem decrescente (mais novo para o mais antigo)
    Categoria.find().sort({date: 'desc'}).then((categorias) => {
        res.render('admin/categorias', {categorias: categorias.map(categoria => categoria.toJSON())})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao listar as categorias")
        res.redirect("/admin")
    })
})

// Insere 
router.post('/categorias/nova', (req, res) => {
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

    let erros = validaCampos(req.body)

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

// Edição
router.get("/categorias/edit/:id", (req, res) => {
    // findOne; irá busca o registro que tem o id único
    Categoria.findById({_id: req.params.id}).lean().then((categoria) => {
        res.render("admin/editcategorias", {categoria: categoria})
    }).catch((err) => {
        // Caso ele não tenha achado a categoria pelo id
        req.flash("error_msg", "Esta categoria não existe")
        res.redirect("/admin/categorias")
    })
})

router.post("/categorias/edit", (req, res) => {
    Categoria.findById({_id: req.body.id}).then((categoria) => {

        // Pegar o campo nome e atribuir
        categoria.nome = req.body.nome
        categoria.slug = req.body.slug

        categoria.save().then(() => {
            req.flash("success_msg", "Categoria editada com sucesso!")
            res.redirect("/admin/categorias")
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria")
            res.redirect("/admin/categorias")
        })

    })
})

router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

router.post("/categorias/deletar", (req, res) => {
    Categoria.remove({_id: req.body.id}).then(() => {
        req.flash("success_msg", "Categoria deletada com sucesso!")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao deletar a categoria")
        res.redirect("/admin/categorias")
    })
})

router.get("/postagens", (req, res) => {
    res.render("admin/postagens")
})

router.get("/postagens/add", (req, res) => {
    Categoria.find().lean().then((categorias) => {
        res.render("admin/addpostagem", {categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário")
        res.redirect("/admin")
    })
})



// No final do arquivo precisa exportar o router
module.exports = router