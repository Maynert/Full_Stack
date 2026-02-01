/**
 * Aula 01 - Acesso a propriedades de objeto (ponto e colchetes)
 * Execute: node 03_acesso_atributos.js
 */

var pessoa = {                     // Cria objeto pessoa
  nome: "Valentina",               // Define a propriedade nome
  idade: 60,                       // Define a propriedade idade
};

console.log(pessoa.nome);          // Acessa a propriedade nome usando notação de ponto
console.log(pessoa["idade"]);      // Acessa a propriedade idade usando notação de colchetes (útil p/ chaves dinâmicas)

const chave = "nome";              // Cria uma variável com o nome da chave que queremos acessar
console.log(pessoa[chave]);        // Acessa pessoa["nome"] usando uma chave dinâmica
