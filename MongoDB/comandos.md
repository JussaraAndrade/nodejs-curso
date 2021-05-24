## MongoDB

1 - Exibe tabelas

* collections; são conjuntos de documentos
```
    show collections;
```

## Configurar mongodb no path

1 - Meu computador > Propriedades > Configurações Avançada > Váriaveis de Ambiente ... 

2 - Selecionar o Path em "Variáveis de usuário..."

3 - Clicar em novo e cole o caminho da instalação do mongodb, e depois ok

```
    C:\Program Files\MongoDB\Server\4.4\bin
```

## Configurar mongodb

1 - Ir em Disco Local(C)

2 - Criar uma pasta chamada `data`, dentro da pasta data criar `db`

* Deixar o mongodb aberto, caso esteja fechado o mongo não irá funcionar.

- Recomenda-se deixar pelo menos um cmd aberto e o outro para digitar comandos.

Digitando o comando para abrir o servidor mongoose, digite no terminal:

```
    mongod
```

## Instalação pacote npm mongoose

É um ODM, que Mepea os documentos mongoose.

- 80% dos projetos do node é usado mongoose
- tem mais recursos do que o sequilize

```js
    npm install --save mongoose

    fonte: https://www.npmjs.com/package/mongoose
```

### Configurando mongosse

* Caso o nome do banco chamado `aprendendo` na url não exista ele irá criar um novo automaticamente.
 
```js
    // Cria constante para armazenar o mongosse
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

```

### Tratamento (verificação da conexão):

* Se a conexão aconteceu com sucesso mostra a mensagem `then()` , se houve erro na conexão também mostre a mensagem `catch()`.

### Arrow function

```js
    //Com function
    then(function(){}).catch()

    //Sem function
    then(() => {}).catch()
```


