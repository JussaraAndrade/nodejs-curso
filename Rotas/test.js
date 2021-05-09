const Sequelize = require('sequelize')

// Conexão com banco
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

// Definindo model 
const Postagem = sequelize.define('postagens', {
    // Campo 1
    titulo:{
        // tipo de string; tem um limite de tamanho de caracteres
        type: Sequelize.STRING    
    },
    // Campo 2
    conteudo:{
        // tipo de texto; tamanho do caracter é ilimitado  
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

//Model Usuário

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
            type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})*/

Usuario.create({
    nome: "Jussara",
    sobrenome: "Andrade",
    idade: 27,
    email: "jussaraandrade@gmail.com"
})


//Testar para ver se o banco tá conectando
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " +erro)
})