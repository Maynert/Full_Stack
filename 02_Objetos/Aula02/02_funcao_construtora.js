/**
 * Aula 02 - Função Construtora (constructor function) + `new` + `this`
 * Execute: node 02_funcao_construtora.js
 */

function Pessoa(nome, anoDeNascimento, profissao) { // Função construtora: usada com `new`
  this.nome = nome;                                 // `this` aponta para o objeto que está sendo criado
  this.anoDeNascimento = anoDeNascimento;           // Define propriedade anoDeNascimento no objeto
  this.profissao = profissao;                       // Define propriedade profissao no objeto
  this.calculaIdade = function () {                 // Define método calculaIdade no próprio objeto
    return new Date().getFullYear() - this.anoDeNascimento; // Usa `this` para acessar a propriedade do objeto
  };                                                // Fecha a função do método
}                                                   // Fecha a função construtora

const pessoa = new Pessoa("Fulano", 1990, "Estudante"); // Cria um objeto chamando a construtora com `new`
console.log(pessoa);                                   // Exibe o objeto criado
console.log("Idade:", pessoa.calculaIdade());          // Exibe a idade calculada
