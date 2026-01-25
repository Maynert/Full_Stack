/**
 * Aula 3 — Módulo CommonJS (consumidor)
 * Importando com require + desestruturação
 */
const circulo = require("./01a_definicaoCJS.js");
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

const { area } = require("./01a_definicaoCJS.js");
console.log(`Área do círculo de raio 2 é ${area(2)}`);
