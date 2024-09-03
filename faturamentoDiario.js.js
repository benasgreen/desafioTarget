const fs = require('fs');

//comando para executar o arquivo
//  node faturamentoDiario.js


// Leitura do arquivo JSON
fs.readFile('faturamento.json', (err, data) => {
    if (err) throw err;

    try {
        const faturamentoArray = JSON.parse(data);

        // Verifique se o faturamentoArray é realmente um array
        if (!Array.isArray(faturamentoArray)) {
            throw new Error('O arquivo JSON não contém um array.');
        }

        let menorValor = Number.MAX_VALUE;
        let maiorValor = Number.MIN_VALUE;
        let totalFaturamento = 0;
        let diasContados = 0;

        faturamentoArray.forEach(dia => {
            const valor = dia.valor;

            if (valor > 0) { // Ignora dias sem faturamento
                if (valor < menorValor) menorValor = valor;
                if (valor > maiorValor) maiorValor = valor;
                totalFaturamento += valor;
                diasContados++;
            }
        });

        const mediaMensal = totalFaturamento / diasContados;
        let diasAcimaDaMedia = 0;

        faturamentoArray.forEach(dia => {
            const valor = dia.valor;

            if (valor > 0 && valor > mediaMensal) {
                diasAcimaDaMedia++;
            }
        });

        console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
        console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
        console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);
    } catch (parseError) {
        console.error('Erro ao processar o arquivo JSON:', parseError);
    }
});
