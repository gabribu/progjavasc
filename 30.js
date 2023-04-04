const readlineSync = require('readline-sync');

let numUno = readlineSync.questionInt("Ingrese el primer numero: ");
let numDos = readlineSync.questionInt("Ingrese el segundo numero: ");

let op = 1;

while ((op >= 1) && (op <= 4)) {
    console.log("1.- Suma");
    console.log("2.- Resta");
    console.log("3.- Multiplicacion");
    console.log("4.- Division");
    console.log("5.- Salir");
    op = readlineSync.questionInt("Qué deseas hacer?: ");

    if (op === 1) {
        let suma = numUno + numDos;
        console.log(`La suma de los dos numeros es: ${suma}`);
    } else if (op === 2) {
        let resta = numUno - numDos;
        console.log(`La resta de los dos numeros es: ${resta}`);
    } else if (op === 3) {
        let multiplicacion = numUno * numDos;
        console.log(`La multiplicacion de los dos numeros es: ${multiplicacion}`);
    } else if (op === 4) {
        let division = numUno / numDos;
        console.log(`La division de los dos numeros es: ${division}`);
    } else if (op === 5) {
        console.log("Bye, Gracias!");
    }
}