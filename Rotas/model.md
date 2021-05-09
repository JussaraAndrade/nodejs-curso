## Modelos no Sequelize

Model é basicamente uma referência da tabela dentro do `sequelize`.

* Criar um modelo que vai gerar uma tabela
* Criar Dois módulos; um para `Postagem` e o outro para `Usuarios`.

#### Model `Postagem`:

* const Postagem: criando um modelo para postagem

* define(): define o modelo, vai definir uma tabela

* {}: dentro desse objeto json, dentro das chaves vai começar montar a tabela.

```js
const Postagem = sequelize.define('postagens', {
    // Campo 1 - titulo
    titulo:{
        // tipo de string; tem um limite de tamanho de caracteres
        type: Sequelize.STRING    
    },
    // Campo 2 - conteudo
    conteudo:{
        // tipo de texto; tamanho do caracter é ilimitado  
        type: Sequelize.TEXT
    }
})
```

### Tipo de campo:

* dizendo que o campo título da tabela model postagem vai ser do tipo String, tipo Varchar no banco.

```js
    type: Sequelize.STRING
```

### Insere dados

1- Chama a função criar

```js
    Postagem.create
```
* Dentro do objeto repassar os campos
* Essa função gera a postagem

```js
    Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    })
```

### Como faz para gerar o model diretamente no MySQL?

* Chama o objeto; `Postagem`.

```js
    sync() //essa função vai sincronizar com o model, com o MySQL. 
```

Vai ter certeza que a tabela vai ser gerada:

```js
    Postagem.sync({force: true})
```
Obs: Assim que executar uma vez, já comenta esse código, ele irá recriar tabela novamente.