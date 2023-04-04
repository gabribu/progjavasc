let sumPa = 0;
let sumImpa = 0;

for(let i = 1; i <= 1000; i++) {
  if(i % 2 === 0) { 
    sumPa += i;
  } else { 
    sumImpa += i;
  }
}

console.log("La suma de los números pares entre 1 y 1000 es: " + sumPa);
console.log("La suma de los números impares entre 1 y 1000 es: " + sumImpa);