const readline = require('readline');

//comando para executar o programa node exercicio5.js


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter uma string
function inverterString(str) {
    let resultado = ''; // String vazia para armazenar o resultado

    // Itera sobre cada caractere da string original, começando do final
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    return resultado;
}

// Solicita ao usuário a entrada da string
rl.question('Digite uma string para inverter: ', (entrada) => {
    const stringInvertida = inverterString(entrada);
    console.log(`String original: ${entrada}`);
    console.log(`String invertida: ${stringInvertida}`);
    rl.close();
});
