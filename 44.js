const fs = require('fs');
const readline = require('readline');

function prObj(obj,atr, value){
    switch (atr){
        case 'nombre':
            obj.nombre = value;
            break;
        case 'apellido':
            obj.apellido = value;
            break;
        case 'direccion':
            obj.direccion = value;
            break;
        case 'estado':
            obj.estado = value;
        default:
            throw 'Atributo no encontrado';
    }
}
let l = new Array();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fr = readline.createInterface({
    input: fs.createReadStream('./DATOS.DAT'),
    crlfDelay: Infinity
});

fr.on('line', (line) => {
    let obj = JSON.parse(line);
    l.push(obj);
    fr.close();
}).on('close',()=>{
    rl.question("Ingresa el estado: ", (answer) => {
        let dat = answer.split(',');
        let filtered = l.filter(e => e.estado.toLowerCase() === answer.toLowerCase());
        for(c of filtered){
            console.log(c);
        }
        rl.close();
    });
});