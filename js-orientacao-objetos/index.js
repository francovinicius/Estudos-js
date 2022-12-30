import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

                                            //com construtor
const contaCorrente1 = new ContaCorrente(cliente1, 1001);

/*
primeiro modo
contaCorrente1.agencia = 1001;
contaCorrente1.cliente = cliente1;
*/
contaCorrente1.depositar(500);

const contaCorrente2 = new ContaCorrente(cliente2, 2002);

/*
contaCorrente2.agencia = 2002;
contaCorrente2.cliente = cliente2;
*/
contaCorrente2.depositar(300);

/*
primeiro modo

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;



const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
*/

console.log(contaCorrente1, contaCorrente2)

console.log(ContaCorrente.numeroDeContas)