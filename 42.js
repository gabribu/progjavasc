const fs = require('fs');
const readlineSync = require('readline-sync');

let archivo = './DATOS.DAT'
let id = readlineSync.questionInt("Ingresa el id de la persona que quiere dar de baja: ");

const contenidoOriginal = fs.readFileSync(archivo, 'utf-8');

const lineas = contenidoOriginal.split('\n');

let cModif = '';

for (let i = 0; i < lineas.length; i++) {
    if (!lineas[i].startsWith(id)) {
        cModif += lineas[i] + '\n';
    }
}

fs.writeFile(archivo, cModif, function(err) {
    if (err) throw err;
    console.log(`Usuario ${id} dado de baja`);
});