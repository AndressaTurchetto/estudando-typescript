export class Conta {
    nome: string
    saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
}