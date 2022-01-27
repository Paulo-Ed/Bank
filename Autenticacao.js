
export class Autenticacao {
    static login(funcionario, senha) {
        return funcionario.senha == senha
    }
}