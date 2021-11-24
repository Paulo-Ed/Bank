import {Cliente} from "./Cliente.js"
export class Conta{
    static totalContas = 0
    constructor(agencia, numero, cliente, saldo){
        this.agencia = agencia
        this.numero = numero
        this._cliente = cliente
        this._saldo = saldo
        Conta.totalContas += 1
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
        
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
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