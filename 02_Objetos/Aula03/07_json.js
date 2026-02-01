/**
 * Aula 03 - JSON: stringify e parse + cuidado com tipos (Date)
 * Execute: node 07_json.js
 */

const student = {                                      // Cria um objeto literal
  name: "John",                                        // Nome
  age: 30,                                             // Idade
  isAdmin: false,                                      // Boolean
  courses: ["html", "css", "js"],                      // Array
  wife: null,                                          // null
};

const json = JSON.stringify(student);                  // Converte objeto para string JSON
console.log("JSON:", json);                            // Exibe JSON

const parsed = JSON.parse(json);                       // Converte string JSON de volta para objeto
console.log("Parsed:", parsed);                        // Exibe objeto reconstruído

console.log("-----");                                  // Separador

const jsonComData = '{ "name":"John Doe", "birth":"2017-11-30T12:00:00.000Z", "city":"Porto Alegre"}'; // JSON com data em string

const objComReviver = JSON.parse(jsonComData, (key, value) => { // Reviver: transforma valores ao fazer parse
  if (key === "birth") {                               // Se a chave for birth...
    return new Date(value);                            // Converte o valor (string) para Date
  }
  return value;                                       // Caso contrário, mantém como está
});

console.log("Nome:", objComReviver.name);              // Exibe nome
console.log("DNasc (Date):", objComReviver.birth);     // Exibe data como Date
