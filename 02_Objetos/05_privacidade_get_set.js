class Pessoa {
  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }

  ola() {
    console.log("Olá");
  }
}

class Estudante extends Pessoa {
  #matricula;

  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, profissao);
    this.#matricula = matricula;

    this.#ola();
  }

  #ola() {
    super.ola();
    console.log(" colega!");
  }

  getMatricula() {
    return this.#matricula;
  }

  setMatricula(valor) {
    this.#matricula = valor;
  }
}

const aluno = new Estudante(["Fulano", "de Tal"], 1990, "Estudante", 120901);
console.log("Matrícula inicial:", aluno.getMatricula());
aluno.setMatricula(158590);
console.log("Matrícula alterada:", aluno.getMatricula());
console.log(aluno.anoDeNascimento);
