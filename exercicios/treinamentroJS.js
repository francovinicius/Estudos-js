

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



//quando usar o for
//se x for, faça enquanto
for(x = 0; x < 10; x++) { //1 2 e 3
    console.log(x)
}

/* 

x++ - incrementar de 1 em 1.
x-- - decrementar de 1 em 1.
x+=2 - incrementar de 2 em 2 (ou de n);
x-=2 - decrementar de 2 em 2 (ou de n);
x*=2 - multiplicar de 2 em 2 (ou de n);

*/
