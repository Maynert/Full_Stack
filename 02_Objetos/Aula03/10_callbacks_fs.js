/**
 * Aula 03 - Callbacks com fs.readFile (Node.js)
 * Execute: node 10_callbacks_fs.js
 *
 * Este exemplo lê o arquivo 01a_textoQualquer.txt (já incluído nesta pasta).
 */

const fs = require("fs");                                    // Importa o módulo fs (File System) do Node

fs.readFile("01a_textoQualquer.txt", (err, buf) => {          // Lê arquivo de forma assíncrona
  if (err) {                                                  // Se houver erro...
    console.log("Houve um erro:", err.message);               // Exibe a mensagem do erro
    return;                                                   // Interrompe o callback
  }
  console.log(buf.toString());                                // Converte buffer para string e imprime o conteúdo
});

console.log("Leitura solicitada (programa continua enquanto o arquivo é lido)"); // Demonstra async
