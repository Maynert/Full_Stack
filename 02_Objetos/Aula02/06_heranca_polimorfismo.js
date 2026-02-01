/**
 * Aula 02 - Herança e Polimorfismo com classes
 * Execute: node 06_heranca_polimorfismo.js
 */

class Pessoa {                                          // Classe base
  constructor(nome, anoDeNascimento, profissao) {       // Construtor da classe base
    this.nome = nome;                                   // Define nome
    this.anoDeNascimento = anoDeNascimento;             // Define ano de nascimento
    this.profissao = profissao;                         // Define profissão
  }

  ola() {                                               // Método base
    console.log("Olá");                                  // Saudação padrão
  }
}

class Estudante extends Pessoa {                         // Estudante herda de Pessoa
  constructor(nome, anoDeNascimento, profissao, matricula) { // Construtor da classe filha
    super(nome, anoDeNascimento, profissao);             // Chama o construtor da classe pai
    this.matricula = matricula;                          // Define atributo próprio
  }

  // Polimorfismo: sobrescreve o método ola()
  ola() {                                                // Método substituído na classe filha
    super.ola();                                         // Reusa comportamento do pai
    console.log(" colega!");                              // Complementa com mensagem extra
  }
}

const aluno = new Estudante("Fulano", 1990, "Estudante", 120901); // Cria aluno
aluno.ola();                                                     // Chama método sobrescrito (polimorfismo)
console.log(aluno);                                              // Exibe objeto
