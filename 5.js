let count = 0;

console.log("Impares hasta el 100: ");

for (let i = 0; i < 101; i++) {
    if ((i % 2) !== 0) {
        console.log(i);
        count++;
    }
}
console.log("Los impares hasta el 100 son: " + count);