/**
 * Aula 02 - Usando o construtor Object() e atribuindo propriedades depois
 * Execute: node 03_object_constructor.js
 */

const pessoa = new Object();                 // Cria um objeto vazio usando o construtor Object
console.log(pessoa);                         // Exibe o objeto inicialmente vazio

pessoa.nome = ["Fulano", "de Tal"];          // Cria/atribui a propriedade nome com um array
pessoa["anoDeNascimento"] = 1990;            // Cria/atribui a propriedade anoDeNascimento usando colchetes
pessoa.profissao = "Estudante";              // Cria/atribui a propriedade profissao
pessoa.calculaIdade = function () {          // Cria/atribui um método calculaIdade
  return new Date().getFullYear() - this.anoDeNascimento; // Calcula idade usando `this`
};

console.log(pessoa);                         // Exibe o objeto já preenchido
console.log("constructor:", pessoa.constructor); // Mostra qual foi o construtor do objeto
