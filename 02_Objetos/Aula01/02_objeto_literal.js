/**
 * Aula 01 - Exemplo de objeto literal com atributos e métodos
 * Execute: node 02_objeto_literal.js
 */

var pessoa = {                     // Cria um objeto literal chamado pessoa
  nome: "Valentina",               // Atributo nome do objeto (string)
  idade: 60,                       // Atributo idade do objeto (number)
  saudar: function () {            // Método saudar: uma função dentro do objeto
    console.log("Olá");            // Imprime uma saudação no console
  },
};

console.log(pessoa);               // Mostra o objeto completo no console
pessoa.saudar();                   // Chama o método saudar do objeto
