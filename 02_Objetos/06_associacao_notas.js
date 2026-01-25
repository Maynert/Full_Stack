class Pessoa {
  constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
  }
}

class Nota {
  constructor(disciplina, grau) {
    this.disciplina = disciplina;
    this.grau = grau;
  }
}

class Estudante extends Pessoa {
  #matricula;
  notas = [];

  constructor(nome, anoDeNascimento, profissao, matricula) {
    super(nome, anoDeNascimento, profissao);
    this.#matricula = matricula;
  }

  getMatricula() {
    return this.#matricula;
  }

  setMatricula(valor) {
    this.#matricula = valor;
  }

  addNota(nota) {
    this.notas.push(nota);
  }
}

const aluno = new Estudante(["Fulano", "de Tal"], 1990, "Estudante", 120901);
aluno.addNota(new Nota("POO", 9.5));
aluno.addNota(new Nota("Banco de Dados", 8.0));

console.log("Aluno:", aluno.nome.join(" "));
console.log("Matrícula:", aluno.getMatricula());
console.log("Notas:", aluno.notas);
