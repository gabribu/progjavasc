const readlineSync = require('readline-sync');

let numCurso = readlineSync.question("Introduce el numero de cursos: ");
let numEstu = readlineSync.question("Introduce los alumnos por curso: ");

const califCurso = [];

for (let i = 0; i < numCurso; i++) {
    const students = [];
    for (let j = 0; j < numEstu; j++) {
        const grade = readlineSync.questionFloat(`Ingrese la nota que obtuvo el alumno ${j + 1} en la materia ${i + 1}: `);
        students.push(grade);
    }
    califCurso.push(students);
}

console.log(califCurso);