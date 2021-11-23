export class Conta{
    constructor(agencia, numero, cliente, saldo){
        this.agencia = agencia
        this.numero = numero
        this.cliente = cliente
        this._saldo = saldo
    }

    saque(valor){
        this._saldo -= valor
        return valor
    }

    depositar(valor){
        this._saldo += valor
        return console.log(`Valor Depositado: R$ ${valor}`)
    }

    saldo(){
        return console.log(`Saldo: R$ ${this._saldo}`)
    }

    transfere(valor, conta){
        const valorTransferencia = this.saque(valor)
        conta.depositar(valorTransferencia) 
        console.log(`Valor: R$ ${valor} \nTransferência realizada com Sucesso!`)
    }
}