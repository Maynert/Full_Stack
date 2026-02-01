/**
 * Aula 03 - Arrow functions (funções de seta)
 * Execute: node 03_arrow_functions.js
 */

let somar = () => console.log("função sem parametros"); // Arrow sem parâmetros: imprime mensagem
somar();                                                // Chama a função

somar = _ => console.log("usando underscore");          // Parâmetro '_' por convenção (não usado)
somar();                                                // Chama a função

somar = (x, y) => x + y;                                // Arrow que retorna expressão (retorno implícito)
console.log(somar(1, 2));                               // 3

somar = (x, y) => { return x + y; };                    // Arrow com bloco: precisa de return explícito
console.log(somar(3, 4));                               // 7

let maior = (x, y) => (x > y ? x : y);                  // Retorna o maior usando ternário
console.log(maior(5, 6));                               // 6

maior = (x, y) => {                                     // Arrow com bloco
  if (x > y) return x;                                  // Se x for maior, retorna x
  return y;                                             // Caso contrário, retorna y
};
console.log(maior(7, 8));                               // 8
