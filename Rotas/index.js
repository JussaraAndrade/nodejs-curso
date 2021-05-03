// express - é um módulo

const express = require("express");
/*
    - Variavel app está recebendo a função express, que vem do módulo express.
    - A função express() cria uma instancia, ou seja, uma cópia inteira do framework pra dentro da variavel app.
    - Qualquer coisa que for usar do express, vai usar a partir da variavel app, a variavel app é a principal do sistema.  

    * Para evitar erros, transforme o var em const, vai evitar que sobrescreva a variavel.
*/

const app = express();


/* 
    Identificar o erro: Cannot GET / : 

    O erro acontece porque a nossa aplicação ainda não tem nenhuma rota definida.
    
    O que seria rota?
    Rota é basicamente um caminho para aplicação. 

*/ 

//Função de callback/rota 1
app.get("/", function(req, res){    
    /* 
        - send; serve para enviar alguma coisa.
        - Atraves da função send dentro do objeto res que vem de resposta está enviando a mensagem. 
    */
    res.send("Seja bem-vindo ao meu app!");
});

//Função de callback/rota 2
app.get("/sobre", function(req, res){
    res.send("Minha página sobre");
})

//Função de callback/rota 3
app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!")
})

/*
 Rotas com parâmetros:
 - A partir dos dois pontos, criar os parametros.

 - Req; é a primeira variável que cria na função de callback.
 Ela é responsavel por receber todos dados de um requisição.

 - Atraves do objeto req consegue obter dados da requisição 
 que foi feita, inclusive o parâmetro.

 Informações importantes:

 - Você só pode chamar função send() em uma única vez, 
   dentro de uma função de uma rotas.
*/
app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Ola " +req.params.nome+ "</h1>"
            + "<h2> Seu cargo e: " +req.params.cargo+ "</h2>"
            + "<h3> Sua cor favorite e: " +req.params.cor+ "</h2>");
 
})


/* 
    - Essa função app.listen é executada, ela fala para o node que a aplicação já está rodando.
    - O node vai lá e executa a função em seguida. 
*/
// última linha do código
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});

