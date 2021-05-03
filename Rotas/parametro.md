### Parâmetros

- Parâmetro é um valor dinâmico que o usuário consegue passar.

Com um parâmetro:

```js
app.get('/ola/:nome', function(req,res){
    res.send("Ola");
})
```


Com dois parâmetros:

```js
app.get('/ola/:cargo/:nome', function(req, res){
    res.send("Ola");
})
```


Acessa tabela inteira dos parâmetros:

```js
app.get('/ola/:cargo/:nome', function(req, res){
    res.send(req.params);
})
```


Acessa os dados apenas por um parâmetro especifico:

```js
app.get('/ola/:cargo/:nome', function(req, res){
    res.send(req.params.nome);
})
```


Acessa os dados mais de um parâmetro:

- Consegue usar HTML

```js
app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Ola " +req.params.nome+ "</h1>"
            + "<h2> Seu cargo e: " +req.params.cargo+ "</h2>"
            + "<h3> Sua cor favorite e: " +req.params.cor+ "</h2>");
})
```

