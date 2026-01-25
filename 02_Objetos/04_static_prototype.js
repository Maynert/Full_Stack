/**
 * Aula 2 — Prototype e membros estáticos
 * - Adicionando método via Pessoa.prototype
 * - Atributo estático
 * - Método estático
 */
function Pessoa(nome, anoDeNascimento, profissao) {
  this.nome = nome;
  this.anoDeNascimento = anoDeNascimento;
  this.profissao = profissao;

  this.calculaIdade = function () {
    return new Date().getFullYear() - this.anoDeNascimento;
  };
}

Pessoa.prototype.saudar = function () {
  console.log("Olá");
};

class PessoaClass {
  static NOME_CLASSE = "Pessoa";

  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }

  calculaIdade() {
    return new Date().getFullYear() - this.anoDeNascimento;
  }

  static ola() {
    console.log("Olá");
  }
}

// Prototype (função construtora)
const p1 = new Pessoa(["Fulano", "de Tal"], 1990, "Estudante");
console.log("Pessoa via função construtora:", p1);
p1.saudar();

// Estáticos (class)
console.log("\nAtributo estático:", PessoaClass.NOME_CLASSE);
PessoaClass.ola();
