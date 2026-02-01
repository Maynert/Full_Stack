/**
 * Aula 02 - Campos privados (#), getters e setters
 * Requer Node 16+ (ou mais recente) para suportar campos privados
 * Execute: node 08_privados_get_set.js
 */

class Carro {
  #_tanque;                            // Campo privado: só acessível dentro da classe
  #_capacidadeDoTanque;                // Campo privado

  constructor(capacidade) {            // Construtor recebe a capacidade do tanque
    this.#_tanque = 0;                 // Inicia tanque vazio
    this.#_capacidadeDoTanque = capacidade; // Define a capacidade máxima
  }

  get tanque() {                       // Getter: permite ler o valor do tanque
    return this.#_tanque;              // Retorna o tanque atual
  }

  get capacidade() {                   // Getter para capacidade
    return this.#_capacidadeDoTanque;  // Retorna capacidade máxima
  }

  set tanque(qtde) {                   // Setter: permite alterar com regra
    if (qtde >= 0) {                   // Só aceita valores não negativos
      if (qtde + this.#_tanque > this.#_capacidadeDoTanque) { // Se ultrapassar capacidade...
        this.#_tanque = this.#_capacidadeDoTanque;            // ...enche até o máximo
      } else {
        this.#_tanque += qtde;         // Caso contrário, soma a quantidade
      }
    }
  }
}

const carro = new Carro(55);           // Cria um carro com capacidade 55
console.log("Capacidade:", carro.capacidade); // Mostra capacidade
console.log("Tanque:", carro.tanque);         // Mostra tanque
carro.tanque = 30;                     // Abastece 30
console.log("Tanque:", carro.tanque);  // Mostra tanque
carro.tanque = 30;                     // Tenta abastecer mais 30 (vai limitar)
console.log("Tanque:", carro.tanque);  // Mostra tanque limitado à capacidade
