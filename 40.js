function crearVentas(nProducto, vend) {
    let prod = [];
    for (let i = 0; i < nProducto; i++) {
        prod.push([]);
        for (let j = 0; j < 12; j++) {
            prod[i].push([]);
            let vent = Math.floor(Math.random() * 5) + 1;
            for (let k = 0; k < vent; k++) {
                prod[i][j].push({
                    seller: vend[Math.floor(Math.random() * vend.length)],
                    sale: Math.random() * 150
                });
            }
        }
    }
    return prod;
}

let months = [
    'Enero', 'Febrero',
    'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'
];

let vend = ['Pancho', 'Torres', 'Marta']
let vent = crearVentas(4, vend);

vent.forEach((product, index) => {
    console.log(`Ventas producto ${index}`);
    product.forEach((month, index) => {
        let total = month.reduce((acc, current) => {
            return acc + current.sale
        }, 0);
        console.log(`${months[index]} : ${total}`);
    });
    console.log('\n');
});