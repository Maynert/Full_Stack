/**
 * Aula 3 — Consumidor do módulo (classe)
 */
const Circulo = require("./02a_definicaoCJS.js");

const c1 = new Circulo(4);
console.log(`Área do círculo de raio 4 é ${c1.area()}`);
console.log(`Circunferência do círculo de raio 4 é ${c1.circunferencia()}`);
