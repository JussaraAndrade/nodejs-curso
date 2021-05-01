let http = require('http');

/*
    Precisa abrir um servidor http, para poder se comunicar com um cliente. 
    
    Para abrir esse servidor, vai chamar a variável, e também vai chamar a função:
    
    Essa função vai abrir um servidor http
    createServer() 

    Chama uma outra função chamada listen:
    
    Essa função listen serve para informar em qual porta de rede você quer abrir o servidor.
    listen()

    Pode ser a porta 80, 90 ou 99.

    Porta padrão: 8081
*/

http.createServer(function(req, res){
    /*
        res; serve para mandar alguma resposta para o usuário para quem está acessando a sua aplicação.
        end; serve para enviar alguma mensagem.
    */
    
    res.end("Hello World! Welcome to my website")
}).listen(8081);

console.log("O Servidor rodando!")