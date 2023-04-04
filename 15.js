const readlineSync = require('readline-sync');

let numUno = readlineSync.questionInt("Introduce el primer numero: ");
let numDos = readlineSync.questionInt("Introduce el segundo numero: ");

let contPar = 0;
let contNatNums = 0;
let sumImpNum = 0

console.log("Los numeros naturales entre estos dos numeros son: ");

for (let i = numUno; i <= numDos; i++) {
    console.log(i);
    contNatNums++;
    if ((i % 2) === 0) {
        contPar++;
    }

    if ((i % 2) !== 0) {
        sumImpNum += i;
    }
}

console.log(`La cantidad de numeros naturales que hay entre el intervalo es: ${contNatNums}`);
console.log(`La cantidad de numeros pares que hay en el intervalo es: ${contPar}`);
console.log(`La suma de los numeros impares del intervalo es: ${sumImpNum}`);