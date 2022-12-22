//exemplo de validação de idade

var idade = prompt ("Digite sua idade");
var genero = prompt("Qual seu gênero? M ou F")


if((idade >= 18) && ((genero == "F") || (genero == "f"))) {
    console.log("Desbloqueado");

} else {
    console.log("Bloqueado");
}