/**
 * Aula 02 - Classes ES6
 * Execute: node 05_classes_es6.js
 */

class Pessoa {                                     // Declara uma classe (molde para criar objetos)
  constructor(nome, anoDeNascimento, profissao) {  // Método construtor chamado ao criar com `new`
    this.nome = nome;                               // Atribui o nome no objeto
    this.anoDeNascimento = anoDeNascimento;         // Atribui o ano de nascimento
    this.profissao = profissao;                     // Atribui a profissão
  }

  ola() {                                          // Método de instância
    console.log("Olá");                             // Exibe saudação
  }

  calculaIdade() {                                 // Método de instância
    return new Date().getFullYear() - this.anoDeNascimento; // Calcula idade
  }
}

const pessoa = new Pessoa("Fulano", 1990, "Estudante"); // Instancia a classe
pessoa.ola();                                         // Chama método
console.log("Idade:", pessoa.calculaIdade());          // Mostra idade
