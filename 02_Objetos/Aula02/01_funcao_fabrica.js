/**
 * Aula 02 - Função Fábrica (factory function)
 * Execute: node 01_funcao_fabrica.js
 */

function criarPessoa(nome, anoDeNascimento, profissao) { // Define uma função que cria objetos do tipo "pessoa"
  return {                                               // Retorna um novo objeto literal
    nome,                                                // Define a propriedade nome (atalho: nome: nome)
    anoDeNascimento,                                     // Define a propriedade anoDeNascimento
    profissao,                                           // Define a propriedade profissao
    calculaIdade: function () {                          // Define um método (função dentro do objeto)
      return new Date().getFullYear() - this.anoDeNascimento; // Calcula idade: ano atual - ano de nascimento
    },
  };                                                     // Fecha o objeto retornado
}

const pessoa = criarPessoa("Fulano", 1990, "Estudante");  // Cria uma pessoa usando a fábrica
console.log(pessoa);                                      // Exibe o objeto
console.log("Idade:", pessoa.calculaIdade());             // Executa o método calculaIdade
