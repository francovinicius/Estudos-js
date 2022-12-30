import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;

  _cliente;

  //# -> torna o campo privada https://github.com/tc39/proposal-class-fields#private-fields
  // mas usa-se o _ na comunidade para privado
  _saldo = 0;



  /* get e set são assessores*/
  //atribuir
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  //pegar
  get cliente() {
    return this._cliente;
  }
  get saldo() {
    return this._saldo;
  }


  
  sacar(valor) {
    //this desse saldo (parametro)
    if (this._saldo >= valor) {
      this._saldo -= valor;

      return valor;
    }
  }

  depositar(valor) {
    //melhor forma de escrever quando tem muitos ifs colocar as condições que não queremos para retornar primeiro
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    //
    const valorSacado = this.sacar(valor);
    //
    conta.depositar(valorSacado);
  }
}
