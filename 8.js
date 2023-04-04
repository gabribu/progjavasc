const readlineSync = require('readline-sync');

let letra = '';

while ((letra !== 'S') && (letra !== 'N')) {
    letra = readlineSync.question("Introduce S o N: ");
}

console.log(`La letra es ${letra}`);