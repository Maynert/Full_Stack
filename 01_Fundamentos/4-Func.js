/*

Funções precisam são criadas diferentes mas com o mesmo conceito.


*/

function integra(){
    
    for(let i=0; i<10; i++) { // Declaro i recebendo 0, se ir for menor que 10 meta bala e recebe + 1. é igual For nX := 1 To ...

        if(i%2 === 0)
            console.log(i + ": é Par");
        else       
            console.log(i + ": é Impar");
    }

}

integra()

/*
Faço a função receber um valor, e crio um laço, para quando I for menor que Intervalo, i recebe + 1.

Abaixo faço um For onde inicio com valor zerado, e valido se ele é menor que a variável com valor definido, se for menor
adiciona o valor 100 e executa.

inicio pega o tempo da execução
chamo a funçao passando a variavel que tinha inicio zerado.

Funcao executa um laço, para quando I for menor que Intervalo(size), i recebe + 1.

no fim do laço, fim pega o tempo da execução e imprime as infos.

*/
function AvalTemp(intervalo){

    for(i=0; i<intervalo; i++);

}

var entrada=1000

for(let size=0; size<entrada; size+=100){

    var inicio = performance.now()
    AvalTemp(size)
    var fim = performance.now()

    console.log(inicio);
    console.log(fim);
    console.log(size+ ";"+ Math.trunc((fim - inicio)* 1000))

}