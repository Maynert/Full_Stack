

// 03a_closure
function somaValores(x) {
  return function (y) {
    return x + y;
  };
}
const soma5 = somaValores(5);
console.log("Closure soma 5 + (2) =", soma5(2));

let somar = () => console.log("função sem parametros");
somar();
somar(1); // argumento extra é ignorado

somar = (_) => console.log("usando underscore");
somar();

somar = (x, y) => x + y;
console.log("somar(1,2) =", somar(1, 2));

somar = (x, y) => {
  return x + y;
};
console.log("somar(3,4) =", somar(3, 4));

somar = (x, y) => (x > y ? x : y);
console.log("maior(5,6) =", somar(5, 6));

somar = (x, y) => {
  if (x > y) return x;
  return y;
};
console.log("maior(7,8) =", somar(7, 8));

let array = [4, 5, 6, 7, 8, 9, 10];

const regraImparSome = (item) => item % 2 == 0; 
console.log("Há algum número impar? " + array.some(regraImparSome));

const regraPrimo = (item) => {
  let ndiv = 0;
  for (let divisor = 1; divisor <= item; divisor++) {
    if (item % divisor == 0) ndiv++;
  }
  return ndiv == 2;
};
console.log("Há algum número primo? " + array.some(regraPrimo));

const regraImparEvery = (item) => item % 2 != 0;
console.log("Todos os números que são impar? " + array.every(regraImparEvery));
console.log("Todos os números que são primos? " + array.every(regraPrimo));

console.log("Filtrar números impar? " + array.filter(regraImparEvery));
console.log("Filtrar os números primos? " + array.filter(regraPrimo));

array.forEach((nro) =>
  console.log(nro + " -> " + (nro % 2 == 0 ? "par" : "ímpar"))
);

const nroDivisores = (item) => {
  let ndiv = 0;
  for (let divisor = 1; divisor <= item; divisor++) {
    if (item % divisor == 0) ndiv++;
  }
  return ndiv;
};

array.forEach((nro) =>
  console.log(`${nro} -> nDivisores de 1 até ${nro} = ${nroDivisores(nro)}`)
);

const resultado = array.reduce((acc, val) => (acc += val % 2 == 0 ? val : 0), 0);
console.log("A soma dos nros pares é " + resultado);

let newArray = array.map((item) => item * 2);
console.log("map *2:", newArray);

newArray = array.map((item) => {
  return { x: item, y: 2 * item };
});
console.log("map para objeto:", newArray);

array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

array
  .filter((nro) => nroDivisores(nro) == 2)
  .map((item) => {
    return { x: item, par: item % 2 == 0 };
  })
  .forEach((obj) => console.log(obj.x + " é par? " + obj.par));
