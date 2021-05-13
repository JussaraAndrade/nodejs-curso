## body-parser

Instalação:

```js
    npm install --save body-parser
```

Configuração:

```js
    // importação
    const bodyParser = require('body-parser')

    //Configuração
    app.use(bodyParser.urlencoded({defaultLayout: 'main'}))
    app.use(bodyParser.json())
```
