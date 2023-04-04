const readlineSync = require('readline-sync');

let sumENumbers = 0;
let countENumbers = 0;

let numUno = readlineSync.questionInt("Ingrese el primer numero: ");
let numDos = readlineSync.questionInt("Ingrese el segundo numero: ");

while (numDos < numUno){
    console.log("[!]Su segundo numero debe de ser igual o mayor que el primero");
    numDos = readlineSync.questionInt("Introduce el segundo numero: ");
}

console.log("Los multiplos de dos del intervalo son: ");

for (let i = numUno; i <= numDos; i++){
    if ((i % 2) === 0) {
        process.stdout.write(i + " ");
        sumENumbers += i;
        countENumbers++;
    }
}

console.log("\nLos multipos de dos en el intervalo son de: " + countENumbers);
console.log("La suma de los multipos de dos en el intervalo son de: " + sumENumbers);

