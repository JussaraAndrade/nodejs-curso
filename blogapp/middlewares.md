## Middlewares

#### O que são middlewares?

Para o cliente se comunicar como servidor com a aplicação, precisa fazer a comunicação através
do método do protocolo http.

Exemplo:

O cliente "usuário" acesse uma rota específica da aplicação. Por exemplo, ele acessa aquela rota de edição de categorias. Então ele faz um requisição para o nosso servidor para ele acessar aquela rota de edição de categoria.

Middlewares; é um pequeno programa, uma pequena parte da aplicação que vai ficar intermediando a comunicação do cliente e servidor. Cada requisição que o cliente "usuário" fizer do nosso servidor. Ele como se fosse um espião fica rodando toda hora, toda requisição, toda resposta do servidor, ou seja, toda comunicação que existe entre cliente e servidor o que vai acontecer que o middlewares vai está no meio observando.

Vantagens:

Consegue manupular as requisições antes delas chegarem ao destino.
Acessa rotas 
Intermediador entre cliente e servidor
Comunicação através do método do protocolo http ()

```js
/* 
- No middlewares não só tem o req e o res tem também o next()
- Cada vez que a página é carregada o middleware é chamado */
app.use((req, res, next) => {
  console.log('Oi eu sou um middleware');

  //significa próximo, não esqueça de colocar o next()
  next()
})

```