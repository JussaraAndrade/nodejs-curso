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


