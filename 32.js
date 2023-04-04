const readlineSync = require(`readline-sync`);
const nArray = [];
let n;

for (let i = 0; i < 20; i++) {
    n = readlineSync.question("Introduce el nombre: ");
    nArray.push(n);
}

for (let j = 0; j < 20; j++) {
    console.log(nArray[j]);
}