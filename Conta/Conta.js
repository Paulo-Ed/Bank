import { Cliente } from "../Cliente.js"
export class Conta {

    static totalContas = 0

    constructor(agencia, numero, cliente, saldo){

        if(this.constructor == Conta) {
            throw new Error("Essa é uma classe abstrata, então não deve ser instanciada diretamente!")
        }

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

    //Método abstrato
    sacar(valor){
        throw new Error("Esse método é abstrato e não deve ser acessado diretamente!")
    }

    _sacar(valor, taxa) { //Método Privado
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return console.log(`Valor sacado: R$ ${valorSacado}`)
        }
        return 0
    }

    depositar(valor){
        this._saldo += valor
        return console.log(`Valor Depositado: R$ ${valor}`)
    }

    saldo(){
        return console.log(`Saldo: R$ ${this._saldo}`)
    }

    transferir(valor, conta){
        const valorTransferencia = this.saque(valor)
        conta.depositar(valorTransferencia) 
        console.log(`Valor: R$ ${valor} \nTransferência realizada com Sucesso!`)
    }
}