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
const session = require("express-session");
// flash é um tipo de sessão que só aparece uma vez, quando usuário carrega a página ela não está mais lá
const flash = require("connect-flash");


/*
Configurar sessões:

npm install --save express- session
npm install --save connect-flash
*/

// Configurações
// Sessão - serve para criação e configuração de middlewares
app.use(session({
  // Chave gera sessão
  secret: "cursodenode",
  resave: true,
  saveUninitialized: true
}))
app.use(flash())

// Middleware
app.use((req, res, next) => {
  //variaveis globais; são variáveis que consegue acessar em qualquer parte da aplicação
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  next()
})

//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/blogapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

// Middlewares
app.use((req, res, next) => {
  console.log("Oi eu sou um middleware");

  //significa próximo, não esqueça de colocar o next()
  next();
});

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
