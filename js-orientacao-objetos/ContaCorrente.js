export class ContaCorrente {
    agencia;
    //# -> torna o campo privada https://github.com/tc39/proposal-class-fields#private-fields
    // mas usa-se o _ na comunidade
    _saldo = 0;
  
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
  }