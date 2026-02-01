/**
 * Aula 03 - Modularização (CommonJS) - Demonstração em 1 arquivo
 * Execute: node 06_modules_commonjs.js
 *
 * No material, o exemplo aparece em arquivos separados (um exporta e outro importa).
 * Aqui eu deixei em UM arquivo para ficar fácil de executar.
 */

// Em CommonJS, normalmente você teria um arquivo "definicao.js" com:
// exports.area = (r) => Math.PI * r ** 2;
// exports.circunferencia = (r) => 2 * Math.PI * r;

const circulo = {};                                  // Objeto que simula o exports/module.exports
circulo.area = (r) => Math.PI * r ** 2;              // Calcula área do círculo
circulo.circunferencia = (r) => 2 * Math.PI * r;     // Calcula circunferência

console.log(`Área (r=4): ${circulo.area(4)}`);       // Exibe área com r=4
console.log(`Circunferência (r=4): ${circulo.circunferencia(4)}`); // Exibe circunferência com r=4
