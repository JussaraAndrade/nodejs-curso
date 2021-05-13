const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')


//Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Configuração do Body Parser
    app.use(bodyParser.urlencoded({defaultLayout: 'main'}))
    app.use(bodyParser.json())


// Rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    // Pega o dado que foi enviado para o formulário
    res.send("Text: " +req.body.titulo+ " Conteudo: " +req.body.conteudo)
})

// última linha do código
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});

