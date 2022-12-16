//selecionar os elementos

//relogios 1 digital 2 ponteiros segundos 3 minutos 4 horas
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updadeClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

                    //inner pra eu poder colocar um texto
    digitalElement.innerHTML = `${hour}:${minute}:${second}`;
}

//intervalo infinito de tempo em tempo rodando em msegundos
setInterval(updadeClock, 1000);