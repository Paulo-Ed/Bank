class Cliente{
    constructor(nome, cpf, agencia, conta){
        this.nome = nome
        this.cpf = cpf
        this.agencia = agencia
        this.conta = conta
    }
    
}

class Conta{
    constructor(agencia, numero, saldo){
        this.agencia = agencia
        this.numero = numero
        this._saldo = saldo
    }

    saque(valor){
        this._saldo -= valor
        return console.log(`Transação Aprovada!\nValor sacado: R$ ${valor}`)
    }

    deposito(valor){
        this._saldo += valor
        return console.log(`Valor Depositado: R$ ${valor} \nSaldo: R$ ${this._saldo}`)
    }

    saldo(){
        return console.log(`Saldo: R$ ${this._saldo}`)
    }
}

//Criando novo Cliente
const cliente1 = new Cliente("Paulo", 12345678901, 0001, 0)
console.log(cliente1.nome)

//Criando Conta
const conta1 = new Conta(0001, "12345-6", 0)
conta1.deposito(200)
conta1.saldo()
conta1.saque(150)
conta1.saldo()