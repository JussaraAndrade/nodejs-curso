const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


//Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Configuração do Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())


// Rotas
    // Redirecionamento de página home
    app.get('/', function(req, res){
        // Retorna todos os post que exitem dentro do banco de dados
        // then(); ele recebe todos os Post
        // Post.findaAll() - é um array de post
        Post.findAll({order: [['id', 'ASC']]}).then(function(posts){
            console.log(posts)
            res.render('home', {posts: posts})
        }) 
    })


app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    // Quando o processo de criação for finalizado
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
    /*
        Caso tenha ocorrido com sucesso, a função then() vai ser chamada e vai executar:
        res.send("Post criado com sucesso!") 
    */

        //Redireciona diretamente para página home
        res.redirect('/')
    }).catch(function(erro){
        /* 
        Caso tenha acontecido alguma falha durante o processo de criação do usuário
        a função que vai ser chamada é a catch(): 
         */
        res.send("Houve um erro: " +erro)
    })
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro){
        res.send("Esta postagem não existe!")
    })
})

// última linha do código
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});

