const readlineSync = require('readline-sync');

function numeroPrimo (n) {

    if (n <= 1) {
        return false;
    } else {
        for (let i = 2; i < n; i++) {
            if ((n % i) === 0) {
                return false;
            }
        }   
    }

    return true;
}

function factorial (n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function tabla (n) {
    console.log("La tabla de multiplicar es la siguiente: \n");

    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

let num = readlineSync.question("Introduce un numero: ");
let op = 1;

while ((op >= 1) && (op <= 3)) {
    console.log("1.- Comprobar si es numero primo");
    console.log("2.- Obtener el factorial");
    console.log("3.- Obtener la tabla de multiplicar");
    console.log("4.- Salir");
    op = readlineSync.questionInt("Qué deseas hacer?: ");

    if (op === 1) {
        if (numeroPrimo(num)) {
            console.log("El numero es primo");
        } else {
            console.log("El numero no es primo");
        }
    } else if (op === 2) {
        console.log(`El factorial del numero es: ${factorial(num)}`);
    } else if (op === 3) {
        tabla(num);
    } else if (op === 4) {
        console.log("Bye, Gracias!");
    }
}