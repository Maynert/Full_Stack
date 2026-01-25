const fs = require("fs");

fs.readFile("01a_textoQualquer.txt", (err, buf) => {
  if (err) console.log("houve um erro");
  else console.log("callback inline:", buf.toString().trim());
});

const onRead = function onRead(err, buf) {
  if (err) console.log("houve um erro");
  else console.log("callback nomeado:", buf.toString().trim());
};
fs.readFile("01a_textoQualquer.txt", onRead);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Pedido atendido"), 1000);
});

promise
  .then((result) => {
    console.log("promise then:", result);
    return "valor";
  })
  .then((result) => console.log("promise then 2:", result))
  .catch((error) => console.log("promise catch:", error));

console.log("fim do programa (continua assíncrono...)");

async function fazAlgo() {
  const promiseInterna = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Pedido atendido (async/await)"), 1000);
  });

  const resultado = await promiseInterna;
  return resultado;
}

console.log("Iniciando o programa (async/await)");
fazAlgo().then((msg) => console.log(msg));
console.log("Finalizando o programa (async/await)");
