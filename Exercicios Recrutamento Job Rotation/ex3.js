const fs = require('fs');

const dadosFaturamento = JSON.parse(fs.readFileSync('dados.json'));

let menorValor = Number.POSITIVE_INFINITY;
let maiorValor = Number.NEGATIVE_INFINITY;
let somaValores = 0;
let diasComFaturamentoAcimaDaMedia = 0;
let diasComFaturamento = 0;

for (const dia of dadosFaturamento) {
    const valor = dia.valor;
    if (valor > 0) {
        diasComFaturamento++;
        somaValores += valor;
        if (valor < menorValor) {
            menorValor = valor;
        }
        if (valor > maiorValor) {
            maiorValor = valor;
        }
    }
}

const mediaMensal = somaValores / diasComFaturamento;

for (const dia of dadosFaturamento) {
    if (dia.valor > mediaMensal) {
        diasComFaturamentoAcimaDaMedia++;
    }
}

console.log('Menor valor de faturamento: ${menorValor}');
console.log('Maior valor de faturamento: ${maiorValor}');
console.log('Número de dias com faturamento acima da média mensal: ${diasComFaturamentoAcimaDaMedia}');
