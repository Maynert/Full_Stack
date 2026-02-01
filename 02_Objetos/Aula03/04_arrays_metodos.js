/**
 * Aula 03 - Arrays: length, iteração e métodos comuns
 * Execute: node 04_arrays_metodos.js
 */

let a = [];                                 // Cria um array vazio
a[0] = "A";                                 // Atribui "A" na posição 0
a[1] = "B";                                 // Atribui "B" na posição 1
a[2] = "C";                                 // Atribui "C" na posição 2
console.log(a);                              // Exibe o array

console.log("length:", a.length);            // Exibe o tamanho do array

a[9] = "Z";                                  // Cria um array esparso (posições 3..8 ficam undefined)
console.log("length:", a.length);            // Agora length vira 10

console.log("----- for..in (índices) -----");
for (let idx in a) {                         // for..in percorre índices existentes
  console.log(idx, a[idx]);                  // Exibe índice e valor
}

console.log("----- for..of (valores) -----");
for (let val of a) {                         // for..of percorre valores (inclui undefined em posições vazias)
  console.log(val);                          // Exibe o valor
}

console.log("----- for tradicional -----");
for (let i = 0; i < a.length; i++) {         // for tradicional percorre 0..length-1
  console.log(i, a[i]);                      // Exibe índice e valor (pode ser undefined)
}

console.log("toString:", a.toString());      // Converte array em string separada por vírgulas
console.log("join:", a.join(" - "));         // Junta elementos com separador

const a2 = a.concat(["X", "Y"]);             // Concatena e retorna um novo array
console.log("concat:", a2);                  // Exibe novo array

const a3 = ["A", "B", "C"];                  // Novo array para exemplo de slice
console.log("slice(1):", a3.slice(1));       // Retorna ["B","C"] sem alterar o original
console.log("slice(0,2):", a3.slice(0, 2));  // Retorna ["A","B"]
