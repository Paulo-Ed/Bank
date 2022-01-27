
export class Autenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha)
    }
}