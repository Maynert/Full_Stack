/*
1 - 
For e While são padrões
If, Else If e Else são padrões
Obs: Não usar maiscula, da pau.
Obs2: Fechar com ;

= é atribuição aqui
== comparação Ex: console.log(1 == "1"); True - Converte a String em valor e compara ambas.
=== compraração estrita console.log(1 === "1"); False - Não converte e compara os valores e tipos diferentes.

2 -
Case se inicia com switch () passando o valor nos parenteses e abrindo chaves
Casos são comparados e é utilizado brake para não seguir para os demais casos, se preciso.
Existe a possibilidade de definir valor padrão em Default.
*/

// 1 - For com If e Else
// Enquanto i for menor que 9, imprime e adiciona + 1.
for (var i = 0; i < 9; i++) { 

    console.log(i);
    
    if(i === 8) 
        console.log("Sou Lindo!!");
    else 
        console.log("Ainda não.");

}

// 2 - While com Case

var n = 0;
var x = 0;

while (n < 3) { 

    n++;
    x += n;

    switch (x){
        case 1: 
            console.log("Inicio");
            break;
        case 2:
            console.log("Nao existo");
        case 6:
            console.log("Fim");
            break;
        default:
            console.log("Padrão");
    }

    console.log(x);

}

// 3- variavel condicional - Vulgo iif

var fruta = (x > 0) ? "Banana" : "Uva";
console.log(fruta)
