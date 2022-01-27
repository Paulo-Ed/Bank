import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {

    static numeroDeContas = 0

    constructor(agencia, numero, cliente) {
        super(agencia, numero, cliente, 0)
        ContaCorrente.numeroDeContas += 1
    }

    sacar(valor){ //Sobrescrita do método sacar herdado da classe Conta
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }
    
}