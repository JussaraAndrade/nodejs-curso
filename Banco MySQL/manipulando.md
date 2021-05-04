### Manipulando o MySQL

#### Insere dados:

```js
    INSERT INTO usuarios (nome, email, idade) VALUES(
    "Jussara Andrade",
    "email@teste.com",
    27
);
```

#### Lista todos os dados:

```js
     SELECT * from usuarios;
```

#### Consulta específica:

* Condição: WHERE - significa aonde.

```js
    SELECT * FROM usuarios WHERE idade = 8;
```

#### Consulta com nome

```js
    SELECT * FROM usuarios WHERE nome = "Lucas";
```

#### Retorne apenas usuários maiores de 18 anos

```js
    SELECT * from usuarios where idade >= 18;
```
