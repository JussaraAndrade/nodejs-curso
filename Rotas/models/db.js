const Sequelize = require('sequelize')
// Conexão com banco de dados Mysql
const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

/*
    - cada model vai ficar em um arquivo específico
    - model vai guardar toda estrutura da tabela de postagens ela vai se chamar Post.js

*/

// Exportando duas variáveis, duas constante.
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}