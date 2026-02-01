/**
 * Aula 02 - Associação entre objetos (composição)
 * Execute: node 09_associacao.js
 */

class Nota {                               // Classe Nota representa uma nota em uma disciplina
  constructor(disciplina, grau) {          // Construtor recebe disciplina e grau
    this.disciplina = disciplina;          // Guarda a disciplina
    this.grau = grau;                      // Guarda o grau/nota
  }
}

class Estudante {
  #matricula;                              // Campo privado para matrícula
  notas = [];                              // Lista (array) pública de notas

  constructor(nome, matricula) {           // Construtor recebe nome e matrícula
    this.nome = nome;                      // Atributo público nome
    this.#matricula = matricula;           // Atributo privado matrícula
  }

  getMatricula() {                         // Getter via método (forma alternativa)
    return this.#matricula;                // Retorna a matrícula privada
  }

  setMatricula(valor) {                    // Setter via método
    this.#matricula = valor;               // Atualiza matrícula
  }

  addNota(nota) {                          // Método para adicionar uma nota
    this.notas.push(nota);                 // Adiciona no array
  }
}

const aluno = new Estudante("Fulano", 120901);           // Cria estudante
aluno.addNota(new Nota("POO", 9.0));                     // Associa uma Nota ao estudante
aluno.addNota(new Nota("Web", 8.5));                     // Adiciona outra nota

console.log("Aluno:", aluno.nome);                       // Exibe nome
console.log("Matrícula:", aluno.getMatricula());         // Exibe matrícula
console.log("Notas:", aluno.notas);                      // Exibe lista de notas associadas
