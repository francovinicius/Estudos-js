
//observador listener vai aguardar um evento acontecer
//keyup quando aperto a tecla e ela é solta e keydown quando ela esta "funda"
                                        //receber um evento
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});


function playSound(sound) {
                                                    //completar com uma nova função
        let audioElement = document.querySelector(`#s_${sound}`);
                                                    //vai procurar um div com uma key
        let keyElement = document.querySelector(`div[data-key="${sound}"]`);
        
            //se o elemento foi encontrado eu dou um play e sai um som na página
        if(audioElement) {
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