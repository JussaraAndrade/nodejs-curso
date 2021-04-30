//Arquivo principal JS

/*
  require; basicamente é aquela função específica do node, que vai pegar o arquivo que também pega o módulo e retornar. 
*/
var SomaFunc = require("./somar");
var SubFunc = require("./sub");
var MultiFunc = require("./multi");
var DivFunc = require("./div");

console.log(SomaFunc(1,2));
console.log(SubFunc(10,5));
console.log(MultiFunc(100,10));
console.log(DivFunc());