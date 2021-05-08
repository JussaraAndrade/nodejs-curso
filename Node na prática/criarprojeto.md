## Criar um projeto NodeJs com NPM

1 - cria uma nova pasta:

```
    mkdir nova_pasta
```

2 - Entra dentro da pasta:

```
    cd nova_pasta
```

3 - Cria o arquivo package.json:

* Onde fica toda configuração do projeto incluindo; nome, versão, descrição, scripts, licença, etc. 

```
    npm init
```

### Configurações:

1 - package name: nome do projeto.

```
    package name: (nova_pasta)
```
2 - version: versão do projeto. (Padrão: 1.0.0)

```
    version: (1.0.0)
```

3 - description: descrição do projeto

```
    description: Projeto de teste
```

4 - entry point: arquivo padrão que será usado para executar aplicação:

```
    entry point: (index.js) app.js
```

5 - test command: Comando para executar os testes da aplicação.

```
    test command:
```

6 - git repository: URL do repositório git, código-fonte da aplicação será armazenado.

```
    git repository:
```

7 - keyword: palavras-chave relevantes para ajudar encontrar o projeto

```
    keyword: teste, npm, init
```

8 - author: autor do projeto

```
    author: Jussara
```

9 - license: tipo de licença do projeto. (Padrão: ISC)

* Para confirmar criação do arquivo responder `yes`.

```
     Is this ok? (yes) yes
```
 
10 - Precisa criar o primeiro arquivo JavaScript da aplicação:

* cria o arquivo chamado `index.js` ou `app.js`.

Dentro da pasta index.js para teste digite, depois execute:

```js
    console.log('Alô mundo!') //no arquivo index.js
```

Informação importante:

Lembrando que um projeto NodeJS não significa um projeto WEB. 




