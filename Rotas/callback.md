## Função Callback

1 - Ela é uma função especial, que é executada quando algum evento acontece:

```js
    then() //funciona como se fosse uma função callback.
```

2 - Essa função quando ela tenta se conectar ao banco de dados, ela só pode ter dois resultados sucesso ou falha:

```js
   sequelize.authenticate() 
```
3 - Teste para ver se o banco tá conectando:


```js
    sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: " +erro)
})
```

### Cenário de execução

1 - Caso consiga autenticar no banco de dados com sucesso a função que vai ser chamada, vai ser a função then().

2 -  Caso ocorra uma falha ou algum erro qualquer a função que vai ser chamada vai ser no catch().

Informações importantes:

 Função then() e catch() fazem parte de um paradigma chamado programação assíncrona.