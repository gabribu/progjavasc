const readlineSync = require('readline-sync');

let num = readlineSync.questionInt("Ingrese un numero: ");
let flag = true;

if (number <= 1) {
    flag = false;
} else {
    for (let i = 2; i < num; i++) {
        if ((num % i) === 0) {
            flag = false;
        }
    }
}

if (flag){
    console.log(`Su numero ${num} es primo`);
}else {
    console.log(`Su numero ${num} no es primo`);
}