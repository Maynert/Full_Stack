/**
 * Aula 3 — ES Modules (consumidor)
 * - import default
 * - import named
 */
import Circulo, { area } from "./03a_definicao_ES6.mjs";

console.log(`Área do círculo de raio 2 é ${area(2)}`);

const c1 = new Circulo(4);
console.log(`Área do círculo de raio 4 é ${c1.area()}`);
console.log(`Circunferência do círculo de raio 4 é ${c1.circunferencia()}`);
