const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Hasta donde quieres ver los numeros naturales?: "));

for (let i = 1; i < (n + 1); i++) {
    console.log(i);
}