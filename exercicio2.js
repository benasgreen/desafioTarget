// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(num) {
    if (num < 0) return false; // Fibonacci não tem números negativos

    let a = 0, b = 1;

    // Caso especial para o número 0 ou 1
    if (num === a || num === b) return true;

    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === num;
}

// Teste da função com um número fixo
const numero = 21; // Substitua pelo número desejado

if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
