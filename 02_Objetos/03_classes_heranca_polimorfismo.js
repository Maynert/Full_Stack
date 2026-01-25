class Pessoa {
  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }

  ola() {
    console.log("Olá");
  }

  calculaIdade() {
    return new Date().getFullYear() - this.anoDeNascimento;
  }
}

class Estudante extends Pessoa {
  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, profissao);
    this.matricula = matricula;
  }

  // Polimorfismo (sobrescrita)
  ola() {
    super.ola();
    console.log(" colega!");
  }
}

const pessoa = new Pessoa(["Fulano", "de Tal"], 1990, "Estudante");
pessoa.ola();
console.log("Pessoa:", pessoa);
console.log("Idade:", pessoa.calculaIdade());


const aluno = new Estudante(["Fulano", "de Tal"], 1990, "Estudante", 120901);
aluno.ola();
console.log("\nAluno:", aluno);
console.log("Idade:", aluno.calculaIdade());

