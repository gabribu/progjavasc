const fs = require('fs');
const readline = require('readline');
let map = new Map();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('linea', (linea) => {
    let obj = JSON.parse(linea);
    map.set(obj.id, obj);


    rl.question('Ingresa el ID : ', (resp) => {
        console.log(map.get(resp))
        rl.close();
    });
});