const readlineSync = require('readline-sync');

let num = readlineSync.questionInt("Introduce un numero: ");

console.log("Su tabla de multiplicar es: \n");

for (let i = 0; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}