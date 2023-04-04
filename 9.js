const readlineSync = require('readline-sync');

let num = readlineSync.question("Introduce un número: ");

if (num > 0) {
    console.log("El número es positivo");
} else if (num < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es 0");
}