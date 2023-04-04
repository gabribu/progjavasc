let dadoUno; 
let dadoDos;

let sum;
let count = 0;

for (let i = 0; i < 100; i++) {
    dadoUno = Math.floor(Math.random() * 6) + 1;
    dadoDos = Math.floor(Math.random() * 6) + 1;

    sum = dadoUno + dadoDos;

    if (sum === 10) {
        count ++;
    }
}

console.log(`El numero de veces que la suma de los dados dio 10 fue de ${count}`);