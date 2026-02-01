/**
 * Aula 02 - Atributos e métodos estáticos
 * Execute: node 07_estaticos.js
 */

class Pessoa {
  static NOME_CLASSE = "Pessoa";       // Atributo estático (pertence à classe, não à instância)

  constructor(nome) {                  // Construtor para instâncias
    this.nome = nome;                  // Atributo de instância
  }

  static ola() {                       // Método estático (chamado em Pessoa.ola())
    console.log("Olá (estático)");     // Mensagem do método estático
  }
}

console.log(Pessoa.NOME_CLASSE);       // Acessa atributo estático
Pessoa.ola();                          // Chama método estático

const p = new Pessoa("Fulano");        // Cria instância
console.log(p.nome);                   // Acessa atributo da instância
