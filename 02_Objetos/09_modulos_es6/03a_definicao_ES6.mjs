/**
 * Aula 3 — ES Modules (definição)
 * Exportando funções (named export) e default (principal)
 */
export const area = (r) => Math.PI * r ** 2;
export const circunferencia = (r) => 2 * Math.PI * r;

export default class Circulo {
  constructor(r) {
    this.raio = r;
  }
  area() {
    return Math.PI * this.raio ** 2;
  }
  circunferencia() {
    return 2 * Math.PI * this.raio;
  }
}
