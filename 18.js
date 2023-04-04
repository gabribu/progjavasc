const readlineSync = require('readline-sync');

let frase = readlineSync.question("Introduce una frase: ");
let letra = readlineSync.question("Letra que deseas buscar: ");
let countLet = 0;

for (let i = 0; i < frase.length; i++){
    if (frase[i] === letra) {
        countLet++;
    }
}

console.log (`La letra \"${letra}" aparece en la frase ${countLet} veces`);
