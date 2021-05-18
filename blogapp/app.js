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

    //const 
// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mysql
        // Em Breve
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


