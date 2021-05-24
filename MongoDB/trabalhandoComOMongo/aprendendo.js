// Conectar ao banco de dados mongo

//Configurando o mongoose
const mongoose = require("mongoose")

// Evita erros durante o processo de desenvolvimento da aplicação
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    //Evita pequenos erros
    useMongoClient: true
}).then(() => {
    // Com sucesso
    console.log("MongoDB Conectado...");
}).catch((err) => {
    // Se houve o erro 
    console.log("Houve um erro ao ser conectar ao mongoDB: ", err);
})

// Model - Usuários
// Definindo o model
// Quando tiver definindo o model dentro do mongoose use o sufixo Schema no final do nome da variável
const UsuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        // campo obrigatorio
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade:  {
        type: Number,
        require: true
    },
    pais: {
        type: String,
    }
})

/*
    Collection; nome da tabela
    
    O que é Collection? 
    É um conjunto de dados 
*/

//Collection: "usuarios"
mongoose.model('usuarios', UsuariosSchema)

// Inserir dados dentro do mongoose

// Adicionando uma referência do schema dentro da const Juca
const Juca = mongoose.model('usuarios')

// Definir um novo usuário
new Juca({
    nome: 'Jhon',
    sobrenome: 'Doe',
    email: 'email@email.com',
    idade: 30,
    pais: 'EUA'
}).save().then(() => {
    console.log("Usuário cadastrado com sucesso!");
}).catch((err) => {
    console.log("Houve um erro ao registrar o usurário", +err);
}) 
