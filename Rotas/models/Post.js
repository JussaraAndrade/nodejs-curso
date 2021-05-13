// importações de arquivos
const db = require('./db')

// Defini o novo model
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

/*
    - sempre que gerar a tabela dentro de um model, comenta essa linha de sincronização, apague ou 
    comente não irá precisar mais dela:

    Post.sync({force: true})
*/

//Execute esse códgio uma única vez: Post.sync({force: true})

// Para acessar o model post através de outros arquivos, por isso a exportação:
module.exports = Post