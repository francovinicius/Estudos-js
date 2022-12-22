//exemplo de validação de idade

var idade = prompt ("Digite sua idade");
var genero = prompt("Qual seu gênero? M ou F")


if((idade >= 18) && ((genero == "F") || (genero == "f"))) {
    console.log("Desbloqueado");

} else {
    console.log("Bloqueado");
}

x = 0;  //1 declarar a variavel

//enquanto -> serve para loops
while (x < 150) { //2 colocar o limitador
    x = x + 1; //3 adicionar o contador

    if (x > 60){
        //parar
        break;
    }else {

        console.log("bora mais um");
    }
}