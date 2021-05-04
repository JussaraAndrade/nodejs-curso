## MySQL

1- Primeiro passo, abrir prompt de comando

### Conectar ao servidor:

* -h; qual servidor deseja se conectar ao servidor local: locahost

* -u; segundo parâmetro é o usuário padrão: root

* -p; o último é a senha

```js
    mysql -h localhost -u root -p
```

### Mostra o banco de dados existentes dentro do MySql:

```js
    SHOW DATABASES;
```

Cria o banco de dados:

```js
    CREATE DATABASE sistemaDeCadastro;
```

### Acessa o banco de dados especifico:

```js
   USE sistemaDeCadastro;
```

* Dentro de cada banco de dados, existem estrutura de dados chamadas tabelas.

* Uma tabela serve para guardar dados.

* Tabela (Usuarios) ela tem colunas (Nome, Email, Idade), e ela também tem linhas são dados (João, teste@teste.com, 18). O Mysql guarda dados em formato de tabelas semelhante com Excel, cada coluna guarda um dado diferente.

## Tipo de dados Mysql

- Texto 
- Char: caracter
- Int: números inteiros (5, 6, 7, 8, 9)
- Float: números decimais (5.0, 10.0, 6.5)
- Date: data
- Blob: guardar arquivos no banco de dados, não é recomendavel.


### Mostra todas as tabelas:

```js
   SHOW TABLES;
```

### Cria tabelas
```js
   CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
)DEFAULT CHARSET = utf8;
```

### Visualiza estrutura da tabela

```js
   DESCRIBE usuarios;
```

* Mostra o nome da coluna
* Mostra também o tipo da coluna, constraints (not null, unique, primary key, etc).





