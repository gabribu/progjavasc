const mat = [];

for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        row.push(Math.floor(Math.random() * 100) + 1);
    }
    mat.push(row);
}

console.log(mat);
const transpose = [];

for (let i = 0; i < 5; i++) {
    const transposeRow = [];
    for (let j = 0; j < 4; j++) {
        transposeRow.push(mat[j][i]);
    }
    transpose.push(transposeRow);
}
console.log(transpose);