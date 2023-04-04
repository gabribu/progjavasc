const mat = [];

for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
        row.push(Math.floor(Math.random() * 100) + 1);
    }
    mat.push(row);
}

console.log(mat);