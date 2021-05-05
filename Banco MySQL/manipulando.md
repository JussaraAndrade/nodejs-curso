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

#### Consulta com nome:

```js
    SELECT * FROM usuarios WHERE nome = "Lucas";
```

#### Retorne apenas usuários maiores de 18 anos:

```js
    SELECT * from usuarios where idade >= 18;
```

### Cuidado com uso desse script - toda tabela será exclúida: 

* Jamais hipotese alguma executa esse script sem where.

```js
    DELETE FROM usuarios;
```

### Delete um dado específico uso recomendavel:

* É dessa forma que trabalha na cláusula delete

```js
    DELETE FROM usuarios WHERE nome = "Lucas";
```

### Cuidado com uso desse script - todos os registros vão ser alterados do campo nome

* Rodar um script desse, você perder o nome de todo mundo.
* Jamais hipotese alguma executa esse script sem where.

```js
    UPDATE usuarios SET nome = "Nome de teste";
```

### Alterar um dado específico uso recomendavel:

* É dessa forma que trabalha na cláusula update de forma segura

```js
    UPDATE usuarios SET nome = "Nome de teste" WHERE nome = "Luis Silva";
```
