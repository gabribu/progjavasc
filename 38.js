const readlineSync = require('readline-sync');
const mat = [];

let f = readlineSync.questionInt("Numero de filas de la matriz: ");
let c = readlineSync.questionInt("Numero de columnas de la matriz: ");

for (let i = 0; i < f; i++) {
    const row = [];
    for (let j = 0; j < f; j++) {
        const num = Math.floor(Math.random() * 50) + 1;
        row.push(num);
    }
    mat.push(row);
}
console.log(mat);

function shellSort(col) {
    const f = col.length;

    for (let i = 1; i < f; i++) {
        const key = col[i];
        let j = i - 1;

        while (j >= 0 && col[j] > key) {
            col[j + 1] = col[j];
            j--;
        }

        col[j + 1] = key;
    }
    return col
}

const firstColumn = mat.map(row => row[0]);
const sortedColumn = shellSort(firstColumn);

for (let i = 0; i < c; i++) {
    mat[i][0] = sortedColumn[i];
}

console.log(mat);