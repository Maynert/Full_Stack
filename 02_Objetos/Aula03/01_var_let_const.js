/**
 * Aula 03 - var, let e const (escopo e particularidades)
 * Execute: node 01_var_let_const.js
 */

// --- var: escopo de função ---
function exemploVar() {                         // Declara função (cria um escopo de função)
  var var01 = "var 01";                         // Declara var01 com var (escopo de função)

  {                                             // Abre bloco (mas var não respeita escopo de bloco)
    var var02 = "var 02";                       // Declara var02 (ainda visível fora do bloco)
    console.log("01a." + var01);                // Imprime var01
    console.log("01b." + var02);                // Imprime var02
  }

  console.log("02a." + var01);                  // var01 continua acessível aqui
  console.log("02b." + var02);                  // var02 também (por ser var)
}
exemploVar();                                   // Executa a função

console.log("-----");                           // Separador

// --- let: escopo de bloco ---
function exemploLet() {                         // Declara função
  let let01 = "let 01";                         // Declara let01 com let (escopo de bloco/linha)
  {                                             // Abre bloco
    let let02 = "let 02";                       // Declara let02 dentro do bloco
    console.log("01a." + let01);                // Acessa let01
    console.log("01b." + let02);                // Acessa let02 (válida aqui)
  }
  console.log("02a." + let01);                  // let01 válida aqui
  // console.log("02b." + let02);               // ERRO se descomentar: let02 não existe fora do bloco
}
exemploLet();                                   // Executa

console.log("-----");                           // Separador

// --- const: atribuição única (mas objeto pode ser mutável) ---
function exemploConst() {                        // Declara função
  const obj = { propriedade: "valor" };          // Cria constante referenciando um objeto
  console.log("01a." + obj.propriedade);         // Acessa propriedade do objeto
  obj.propriedade = "novo valor";                // Modifica a propriedade (permitido: a referência não mudou)
  console.log("02a." + obj.propriedade);         // Exibe o novo valor
  // obj = { propriedade: "X" };                 // ERRO se descomentar: não pode reatribuir const
}
exemploConst();                                  // Executa
