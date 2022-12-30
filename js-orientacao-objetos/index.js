import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente();
conta2.agencia = 1001
conta2.cliente = cliente2;

console.log(contaCorrenteRicardo, conta2);
