const pessoa = {
  nome: "Valentina",
  idade: 60,
  saudar: function (nomeAmigo) {
    console.log("Olá " + nomeAmigo);
  },
};

console.log(pessoa.nome);           
console.log(pessoa["nome"]);       

pessoa.idade = 30;                  
console.log(pessoa.idade);

pessoa["idade"] = 31;              
console.log(pessoa["idade"]);

pessoa.saudar("Joana");
