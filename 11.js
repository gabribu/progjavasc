const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Ingresa el numero limite: "));

for (let i = 1; i <= n; i++) {
    if ((i % 3) === 0) {
        console.log(i);
    }
}