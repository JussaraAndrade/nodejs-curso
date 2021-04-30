// Função
var soma = function (a,b){
    return a+b;
}

// Objeto
var obj = {
    nome: "Victor"
}

/*
    - Ele vai exportar a variável soma que tem a função de soma.
    - Exporta variáveis que são valores, pode exportar objetos, pode exportar qualquer coisa...
*/

module.exports = soma;