const readlineSync = require('readline-sync');
const fs = require('fs');

fs.writeFile('./DATOS.DAT', '', function(err) {
    if (err) throw err;
    console.log('Su archivo fue creado con éxito!');
});

let id = readlineSync.questionInt("Ingresa el ID: ");
let nombre = readlineSync.question("Ingresa el nombre: ");
let apellido = readlineSync.question("Ingresa el apellido: ");
let direccion = readlineSync.question("Ingresa la direccion: ");
let estado = readlineSync.question("Ingresa el estado ");
let tags = "\tID\t\tNAME\t\tLAST NAME\t\tADDRESS\t\t\tSTATE\n";
fs.appendFile('./DATOS.DAT', tags, function(err) {
    if (err) throw err;
    console.log("Tags añadidos correctamente");
});

let append = `\t${id}\t\t${nombre}\t\t${apellido}\t\t${direccion}\t\t\t${estado}\n`;

fs.appendFile('./DATOS.DAT', append, function(err) {
    if (err) throw err;
    console.log("Contenido agregado con éxito!");
});