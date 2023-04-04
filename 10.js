const readlineSync = require('readline-sync');

let num = parseInt(readlineSync.question("Introduce un numero: "));

if ((num % 2) === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}