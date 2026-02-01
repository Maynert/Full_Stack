/**
 * Aula 03 - Promises, then/catch e async/await
 * Execute: node 09_promises_async_await.js
 */

const myFirstPromise = new Promise((resolve, reject) => { // Cria uma promise com executor
  setTimeout(() => {                                       // Agenda execução futura
    resolve("Sucesso!");                                   // Resolve a promise com uma mensagem
  }, 500);                                                 // Tempo em ms
});

myFirstPromise
  .then((successMessage) => {                              // Callback de sucesso
    console.log(`Finalizado! ${successMessage}`);           // Imprime mensagem
  })
  .catch((err) => {                                        // Callback de erro (se acontecer)
    console.log("Erro:", err);                              // Imprime erro
  });

const failPromise = new Promise((resolve, reject) => {      // Cria outra promise
  setTimeout(() => reject("Rejeitado"), 500);               // Rejeita após 500ms
});

failPromise
  .then(() => console.log("All right!!"))                   // Não executa (rejeitou)
  .catch(() => console.log("Uma exceção foi lançada"));     // Trata rejeição

console.log("-----");                                       // Separador

async function fazAlgo() {                                  // Função async (retorna Promise)
  const promise = new Promise((resolve) => {                // Promise local
    setTimeout(() => resolve("Pedido atendido"), 500);       // Resolve depois de 500ms
  });

  const resultado = await promise;                          // Aguarda a promise resolver
  return resultado;                                         // Retorna resultado
}

async function main() {                                     // Função principal async
  console.log("Iniciando o programa");                      // Log inicial
  console.log(await fazAlgo());                             // Aguarda fazAlgo e imprime
  console.log("Finalizando o programa");                    // Log final
}

main();                                                     // Executa a função principal
