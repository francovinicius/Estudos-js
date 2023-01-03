
//voltando para objeto o que foi transformado em string
var convidados = JSON.parse(localStorage.getItem("convidados")) || [];

var elLista = document.getElementById("lista");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");

//array
var convidados = [
  { nome: "Bruno de Souza" },
  { nome: "Jefferson Andrade" },
  { nome: "Maria José" },
  { nome: "Jose da Silva" },
];

function listarConvidados() {
    //para não ficar sempre repetindo os nomes do array
    elLista.innerHTML = "";
  //recebe o valor da lista of lista
  for (const convidado of convidados) {
    var elConvidado = document.createElement("li");
    var elNome = document.createTextNode(convidado.nome);

    var elExcluir = document.createElement("a");
    elExcluir.setAttribute("href", "#");

    //função de excluir
    elExcluir.onclick = function () {
        convidados = convidados.filter(function(item) {
            return item.nome != convidado.nome;
        });

        listarConvidados();
        salvarConvidados();
        alert("Convidado " + convidado.nome + " Excluido")
    };

    //texto excluir
    var elExcluirTexto = document.createTextNode("Excluir");

    //atribuindo ao ul
    elConvidado.appendChild(elNome);
    elConvidado.appendChild(elExcluir);
    elExcluir.appendChild(elExcluirTexto);
    elLista.appendChild(elConvidado);
  }
}

listarConvidados();



var adcionarConvidado = function () {
  //capitura o valor digitado no campo
  var nome = elCampo.value;

  //ciar um nome na propriedade nome do array
  convidados.push({ nome: nome });
    //limpar o campo 
  elCampo.value = "";
  //chamar a função pra verificar os convidados novamente
  listarConvidados();
  salvarConvidados();
};


//funcionalidade do botão
elBotao.onclick = adcionarConvidado;



//salvar no local storage

function salvarConvidados () {
    //transformando o objeto em string
    localStorage.setItem("convidados", JSON.stringify(convidados));
}
