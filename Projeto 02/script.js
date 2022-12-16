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
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

    //corrigindo o tempo quando é menor que 10
    //se menor que 10 retorna com um 0 em frente
function fixZero(time) {
    if(time<10) {
        return '0'+time;
    } else {
        return time;
    }
}

//intervalo infinito de tempo em tempo rodando em msegundos
setInterval(updadeClock, 1000);