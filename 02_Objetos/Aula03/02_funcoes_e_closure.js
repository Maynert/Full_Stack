/**
 * Aula 03 - Funções com/sem parâmetros + valor padrão + closure
 * Execute: node 02_funcoes_e_closure.js
 */

function funcaoSemRetorno() {                // Declara função sem retorno explícito
  console.log("Alô Mundo!");                 // Imprime mensagem
}

function funcaoComReturn() {                 // Declara função com retorno
  return "Alô Mundo!";                       // Retorna uma string
}

let msg = funcaoSemRetorno();                // Chama função; retorno será undefined
console.log(msg);                            // Mostra undefined

msg = funcaoComReturn();                     // Chama função com retorno
console.log(msg);                            // Mostra a string

console.log("-----");                        // Separador

function potencia(base, expoente = 2) {      // Função com parâmetro padrão (expoente=2)
  let resultado = 1;                         // Variável acumuladora
  for (let cont = 0; cont < expoente; cont++) { // Loop de 0 até expoente-1
    resultado *= base;                       // Multiplica base repetidamente
  }
  return resultado;                          // Retorna o resultado
}

console.log(potencia(4));                    // 4^2
console.log(potencia(2, 6));                 // 2^6

console.log("-----");                        // Separador

// Closure: função que "lembra" do ambiente de criação
function somaValores(x) {                    // Recebe x e devolve outra função
  return function (y) {                      // Função interna recebe y
    return x + y;                            // Usa x (do escopo externo) + y
  };
}

const soma5 = somaValores(5);                // Cria uma função que soma 5 ao valor recebido
console.log(soma5(2));                       // 7
