/**
 * Aula 03 - Exceções: throw, try/catch/finally, tipos de erro
 * Execute: node 08_excecoes.js
 */

try {
  throw new Error("Gerando um erro genérico!");       // Lança uma exceção do tipo Error
} catch (e) {
  console.error(`${e.name}: ${e.message}`);           // Captura e imprime nome e mensagem do erro
}

console.log("-----");                                  // Separador

class ValidationError extends Error {                  // Exceção customizada herdando de Error
  constructor(message) {                               // Construtor
    super(message);                                    // Define message via Error
    this.name = "ValidationError";                     // Nome do erro
  }
}

function vaiDarErro() {                                // Função que sempre lança um erro
  throw new ValidationError("Dados inválidos!");        // Lança a exceção customizada
}

try {
  vaiDarErro();                                        // Executa função que gera erro
} catch (e) {
  console.error(`${e.name}: ${e.message}`);             // Trata e imprime
} finally {
  console.log("Encerra tratamento");                    // Sempre executa
}

console.log("-----");                                  // Separador

let json = "incorreto";                                // String inválida para JSON.parse
try {
  let pessoa = JSON.parse(json);                       // Tenta converter (vai falhar)
  console.log(pessoa.nome);                            // Não será executado
} catch (err) {
  if (err instanceof SyntaxError) {                    // Se for SyntaxError, trata
    console.log(`Erro ${err.name}: ${err.message}`);    // Mostra mensagem
  } else {
    throw err;                                         // Relança erro desconhecido
  }
} finally {
  console.log("Final do bloco try/catch");              // Sempre executa
}
