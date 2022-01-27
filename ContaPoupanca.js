import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta {
    
    constructor(agencia, numero, cliente, saldoInicial) {
        super(agencia, numero, cliente, saldoInicial)
    }

}