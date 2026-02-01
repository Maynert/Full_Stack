/**
 * Aula 02 - Protótipos: adicionando métodos ao prototype
 * Execute: node 04_prototype.js
 */

function Pessoa(nome, anoDeNascimento, profissao) { // Função construtora
  this.nome = nome;                                 // Propriedade nome
  this.anoDeNascimento = anoDeNascimento;           // Propriedade anoDeNascimento
  this.profissao = profissao;                       // Propriedade profissao
}

// Método no prototype: NÃO fica duplicado em cada instância
Pessoa.prototype.calculaIdade = function () {        // Adiciona método ao protótipo de Pessoa
  return new Date().getFullYear() - this.anoDeNascimento; // Calcula idade
};

Pessoa.prototype.saudar = function () {              // Adiciona outro método ao protótipo
  console.log("Olá");                                // Mensagem simples
};

const pessoa = new Pessoa("Fulano", 1990, "Estudante"); // Cria instância
console.log("Idade:", pessoa.calculaIdade());           // Chama método do prototype
pessoa.saudar();                                       // Chama método do prototype
