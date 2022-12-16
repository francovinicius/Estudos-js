
//observador listener vai aguardar um evento acontecer
//keyup quando aperto a tecla e ela é solta e keydown quando ela esta "funda"
                                        //receber um evento
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

//selecionar o botão "tocar"
document.querySelector('.composer button').addEventListener('click', () => {
        //vai pehar o que o cara digitou no input
    let song = document.querySelector('#input').value;

        //transformando o som em um array
    if(song !== '') {
        let songArray = song.split('');
        playComposition(songArray)
    }
})


function playSound(sound) {
                                                    //completar com uma nova função
        let audioElement = document.querySelector(`#s_${sound}`);
                                                    //vai procurar um div com uma key
        let keyElement = document.querySelector(`div[data-key="${sound}"]`);
        
            //se o elemento foi encontrado eu dou um play e sai um som na página
        if(audioElement) {
            //vai sempre zerar quando clicarmos no botão
            audioElement.currentTime = 0;
            audioElement.play();
        }

        if(keyElement) {
                //adiciona a classe pra deixar a tecla de outra cor
            keyElement.classList.add('active');

                //remove a classe que dita a cor em 300 msegundos
            setTimeout(()=> {
                keyElement.classList.remove('active')
            }, 300);
        }
}

    //função pra cada item ser executado uma vez
function playComposition(songArray) {
    let wait = 0;
        //loop
    for(let songItem of songArray){
            //setando as diferenças de tempo pra casa item
        setTimeout(()=> {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;

        
    }
}