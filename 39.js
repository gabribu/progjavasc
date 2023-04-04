let conta = 1;

for (let x = 0; x < 3; x++) {
    console.log(`Página ${x + 1}\n`);
    for (let y = 0; y < 4; y++) {
        let ele = "";
        for (let z = 0; z < 5; z++) {
            ele += `${conta}\t`;
            conta++;
        }
        console.log(ele);
    }
    console.log("\n");
}