const fs = require('fs');


// comando para executar o arquivo node percentualEstado.js


// Leitura do arquivo JSON
fs.readFile('faturamentoEstados.json', (err, data) => {
    if (err) throw err;

    try {
        const faturamento = JSON.parse(data);

        // Cálculo do faturamento total
        const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

        // Cálculo e exibição dos percentuais
        for (const estado in faturamento) {
            const percentual = (faturamento[estado] / totalFaturamento) * 100;
            console.log(`Percentual ${estado}: ${percentual.toFixed(2)}%`);
        }
    } catch (parseError) {
        console.error('Erro ao processar o arquivo JSON:', parseError);
    }
});
