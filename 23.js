for (let i = 0; i <= 100; i++) {
    if ((i % 10) === 0){
        console.log();
    }else {
        process.stdout.write(i + " ");
    }
}