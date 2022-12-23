 //arrays
 var nomes = [];

 var quantConvidados = Number(prompt("Digite o número de convidados"));

 for(i = 0; i < quantConvidados; i++) {
    nomes[i] = prompt("Digite o nome do convidado " + i);

    console.log(nomes)
 }