/* 
    - Arquivo principal  
*/
// Carregando módulos
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
// importa o arquivo que vem da pasta routes
const admin = require("./routes/admin");
// carrega um módulo chamado path padrão do node
const path = require("path");
const mongoose = require("mongoose");

//const
// Configurações
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/blogapp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado ao mongo");
  })
  .catch((err) => {
    console.log("Erro ao se conectar: " + err);
  });


// Public
// tá falando para express que está aguardando todos os arquivos estáticos da pasta public
// caminho absoluto
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.get("/", (req, res) => {
  res.send("Rota principal");
});

app.get("/posts", (req, res) => {
  res.send("Lista Posts");
});

// prefixo: /admin
app.use("/admin", admin);

// const urlencodedParse = bodyParser.urlencoded({extended:false}); 
// app.use("/admin", urlencodedParse, admin);

// Outros
const PORT = 8081;
app.listen(PORT, () => {
  console.log("Servidor rodando!");
});
