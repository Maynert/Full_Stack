/**
 * Aula 03 - Funções de alta ordem em arrays: some/every/filter/forEach/reduce/map
 * Execute: node 05_higher_order_arrays.js
 */

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];           // Array base para exemplos

const ehPar = (item) => item % 2 === 0;               // Regra: número é par?
console.log("Há algum par?", array.some(ehPar));      // some(): algum elemento passa?

const menorQue11 = (item) => item < 11;               // Regra: menor que 11?
console.log("Todos < 11?", array.every(menorQue11));  // every(): todos passam?

const impares = array.filter((n) => n % 2 !== 0);     // filter(): filtra itens que passam na regra
console.log("Ímpares:", impares);                     // Exibe ímpares

array.forEach((n) => {                                // forEach(): executa ação para cada item
  const tipo = n % 2 === 0 ? "par" : "ímpar";         // Determina se é par ou ímpar
  console.log(n, "->", tipo);                         // Imprime o tipo
});

const somaDosPares = array.reduce((acc, val) => {     // reduce(): acumula para um único valor
  return acc + (val % 2 === 0 ? val : 0);             // Soma só os pares
}, 0);                                                // Inicializa acumulador com 0
console.log("Soma dos pares:", somaDosPares);         // Exibe soma

const dobrados = array.map((n) => n * 2);             // map(): transforma cada item
console.log("Dobrados:", dobrados);                   // Exibe resultado

const paresComObjeto = array
  .filter((n) => n % 2 === 0)                         // Filtra pares
  .map((n) => ({ x: n, par: true }));                 // Mapeia para objetos
console.log("Objetos (pares):", paresComObjeto);      // Exibe objetos
