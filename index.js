import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

//Criando novo Cliente1
const cliente1 = new Cliente("Paulo", 12345678901)

//Criando novo Cliente2
const cliente2 = new Cliente("Eduardo", 98765432110)

//Criando Conta1
const conta1 = new Conta(1123, "12345-6",cliente1, 0)
//conta1.deposito(200)
//conta1.saldo()
//conta1.saque(150)
//conta1.saldo()

//Criando Conta2
const conta2 = new Conta(1123, "3457-9", cliente2, 500)
conta1.saldo()
conta2.saldo()
conta2.transfere(200, conta1)

//Criando Conta3 e definindo a partir dela um cliente associado
const conta3 = new Conta(1123, "45678-2")
conta3.cliente = new Cliente("Santos", 23415687907)
console.log(conta3)

//Criando Conta4 e o associando a um novo cliente dinâmicamente
const conta4 = new Conta(1123, "55933-1")
conta4.cliente = new Cliente()
conta4.cliente.nome = "Cleide"
//conta4.cliente.cpf = 33456711198
console.log(conta4)

//Acessando atributos de classe
console.log(Conta.totalContas)