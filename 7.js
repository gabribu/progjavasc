let count = 0;
const readlineSync = require('readline-sync');

let frase = readlineSync.question("Introduce un texto o enter para salir: ");

while (frase !== '') {
    count++;
    frase = readlineSync.question("Introduce un texto o enter para salir: ");
}

console.log(`Las frases ingresadas fueron ${count}`);