const readlineSync = require('readline-sync')

function showHour (){
    const current = new Date ();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    const currentHour = hours + ":" + minutes + ":" + seconds;
    console.log(currentHour);
}

function configuration (){
    let hour = readlineSync.questionInt("Ingresa la hora: ");
    let minutes = readlineSync.questionInt("Ingresa los mins: ");
    let seconds = readlineSync.questionInt("Ingresa los seg: ");
    const now = new Date();

    now.setHours(hour);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
}

configuration();
setInterval(showHour, 1000);