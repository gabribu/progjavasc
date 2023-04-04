const readlineSync = require('readline-sync');

function factorial (n){
    let fact = 1;

    for (let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

let num = readlineSync.questionInt("Introduce un numero para sacar su factorial: ");
console.log(`El factorial de ${num} es ${factorial(num)}`);
