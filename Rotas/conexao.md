### Conexão ao MySQL

1 - Conexão com banco de dados:

* Dentro das aspas faz conexão

```js
    const sequelize = new Sequelize()
```

2 - É o usuário do banco que usa para se conectar com MySQL.

### Parâmetros:


1 - Banco de dados

2 - Usuário

3 - Senha

4 - Objeto Json:

* host; serve para dizer qual máquina, qual servidor está o nosso banco de dados na SQL.

* dialect; qual tipo de banco de dados você quer se conectar. É importante informar qual banco,  por que sequelize trabalha não apenas com MySQL. 

```js
    const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})
```

