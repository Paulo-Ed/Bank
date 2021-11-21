class Cliente{
    constructor(nome, cpf, agencia, saldo){
        this.nome = nome
        this.cpf = cpf
        this.agencia = agencia
        this.saldo = saldo
    }
    
}



const cliente1 = new Cliente("Paulo", 12345678901, 0001, 0)

console.log(cliente1.nome)