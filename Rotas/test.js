const Sequelize = require('sequelize')

// Conexão com banco
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})


/*
    Função callback:

    then; funciona como se fosse uma função callback.
    Ela é uma função especial, que é executada quando algum
    evento acontece.

    sequelize.authenticate; essa função quando ela tenta se
    conectar ao banco de dados, ela só pode ter dois resultados
    sucesso ou falha.

    Cenário de execução:

    Caso consiga autenticar no banco de dados com sucesso a função
    que vai ser chamada, vai ser a função then().

    Caso ocorra uma falha ou algum erro qualquer a função que vai
    ser chamada vai ser no catch().

    Informações importantes:

    Função then() e catch() fazem parte de um paradigma chamado programação
    assíncrona

*/

//Testar para ver se o banco tá conectando
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " +erro)
})