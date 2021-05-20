/* 
    - Arquivo principal  
*/
// Carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    // importa o arquivo que vem da pasta routes
    const admin = require('./routes/admin')
    // carrega um módulo chamado path padrão do node
    const path = require('path')
    const Sequelize = require('sequelize')

    //const 
// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mysql
    const sequelize = new Sequelize('test', 'root', 'root', {
        host: "localhost",
        dialect: 'mysql'
    })
    //Evitar qualquer tipo de erro
    sequelize.Promise = global.Promise;
    sequelize.authenticate().then(() => {
        console.log("Conectado com sucesso!")
    }).catch(function(erro){
        console.log("Falha ao se conectar: " +erro)
    }) 
    // Public 
        // tá falando para express que está aguardando todos os arquivos estáticos da pasta public
                                        // caminho absoluto
        app.use(express.static(path.join(__dirname, "public")))
        

// Rotas
    app.get('/', (req, res) => {
        res.send('Rota principal')
    })

    app.get('/posts', (req, res) => {
        res.send("Lista Posts")
    })

    // prefixo: /admin
    app.use('/admin', admin)

// Outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando!")
})


