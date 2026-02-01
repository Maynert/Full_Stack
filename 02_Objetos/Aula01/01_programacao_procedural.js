/**
 * Aula 01 - Exemplo de programação procedural (função + variáveis)
 * Execute: node 01_programacao_procedural.js
 */

let numero1 = 10;                 // Declara a variável numero1 e atribui o valor 10
let numero2 = 20;                 // Declara a variável numero2 e atribui o valor 20

function add(n1, n2) {            // Declara a função add, que recebe dois parâmetros (n1 e n2)
  return n1 + n2;                 // Retorna a soma de n1 e n2
}

let z = add(numero1, numero2);    // Chama a função add com numero1 e numero2 e guarda o resultado em z
console.log(z);                   // Imprime o valor de z no console (resultado da soma)

// ---- Exemplo 2: cálculo de salário com horas extras ----
let horaExtra = 100;              // Valor pago por hora extra (exemplo)
let qtHoras = 20;                 // Quantidade de horas extras (exemplo)
let salarioFixo = 5000;           // Salário base (exemplo)

function calculaSalario(valorHoraExtra, quantidadeHoras) { // Declara função que calcula salário total
  return salarioFixo + (valorHoraExtra * quantidadeHoras); // Soma salário fixo + horas extras
}

let total = calculaSalario(horaExtra, qtHoras); // Chama a função e salva o total
console.log(total);                 // Exibe o salário total no console
