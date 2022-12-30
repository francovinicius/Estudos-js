class Cliente{
    nome;
    cpf;
 
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
            //this desse saldo (parametro)
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0
contaCorrenteRicardo.agencia = 1001;




contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
