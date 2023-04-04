let par = 0;
let impar = 0;

for (let i = 0; i <= 100; i++) {
    if ((i % 2) === 0) {
        par += i;
    } else {
        impar += i;
    }
}

console.log(`La suma de los numeros pares es: ${par}`);
console.log(`La suma de los numero impares es: ${impar}`);