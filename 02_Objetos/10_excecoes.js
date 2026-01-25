/**
 * Aula 3 — Exceções
 * - throw new Error
 * - try/catch
 * - exceção customizada herdando Error
 */

// 01a_firstException.js
try {
  throw new Error("Gerando um erro genérico!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}

// 02a_criandoExceção.js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function vaiDarErro() {
  throw new ValidationError("Dados inválidos!");
}

try {
  vaiDarErro();
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
} finally {
  console.log("finally: executa independente de erro");
}
