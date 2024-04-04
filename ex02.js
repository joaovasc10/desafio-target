// Função para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c;
    
    // Verifica se o número é igual a 0 ou 1, pois eles são os dois primeiros números na sequência
    if (numero === 0 || numero === 1) {
        return true;
    }
    
    // Gera os números da sequência de Fibonacci até ultrapassar o número informado
    while (true) {
        c = a + b;
        if (c === numero) {
            return true; // O número pertence à sequência de Fibonacci
        } else if (c > numero) {
            return false; // O número não pertence à sequência de Fibonacci
        }
        a = b;
        b = c;
    }
}

// Número a ser verificado se pertence à sequência de Fibonacci
const numeroInformado = 21; // Você pode alterar este número conforme necessário

// Verifica se o número informado pertence à sequência de Fibonacci
if (verificaFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
