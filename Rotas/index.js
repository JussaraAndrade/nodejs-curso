const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

// Conexão com banco de dados Mysql
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

// última linha do código
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});

