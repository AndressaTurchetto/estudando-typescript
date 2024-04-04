export function ValidaDebito(target: any, proportyKey: string, descriptor: PropertyDescriptor) {
    const originalMethor = descriptor.value;
    //Colocamos uma função de validação dentro do descriptor value
    // Vai verificar se o valor do débito é maior que 0
    // E também verificar se o valor é maior que o saldo
    // Depois irá retornar o valor original aplicado essa validação
    descriptor.value = function (valorDoDebito: number) {
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado precisa ser maior do que zero")
        }

        if (valorDoDebito > this.saldo) {
            throw new Error("Seu saldo é insuficiente para realizar a operação!")
        }

        return originalMethor.apply(this. [valorDoDebito])
    }

    return descriptor;
}

// É a mesma estrutura do valida débito
// Valida se o depósito for zero valida um erro na tela
// E depois retorna o metodo com essa função
export function ValidaDeposito(target: any, proportyKey: string, descriptor: PropertyDescriptor) {
    const originalMethor = descriptor.value;
    descriptor.value = function (valorDoDeposito: number) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior do que zero!")
        } 
        return originalMethor.apply(this, [valorDoDeposito]);
    }
    return descriptor;
}