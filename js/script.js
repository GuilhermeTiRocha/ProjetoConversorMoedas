function calcular() {
    let moeda = document.getElementById("selecao").value;
    let qtd = document.getElementById("qtd").value;
    
    buscarCotacaoMoeda(moeda, qtd);
}

// Função para buscar a cotação da moeda escolhida
async function buscarCotacaoMoeda(moeda, qtd) {
    const url = `https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`; // Monta a URL com a moeda escolhida
    let resultado = document.getElementById("resultado");
    try {
        const response = await fetch(url); // Faz a requisição para a API
        const data = await response.json(); // Converte a resposta para JSON
        const cotacaoMoeda = data[`${moeda}BRL`].bid; // Extrai a cotação da moeda escolhida (bid)
        const valorConvertido = (qtd / cotacaoMoeda).toFixed(2); // Aplica toFixed(2) para limitar a 2 casas decimais
        resultado.innerHTML = ` equivale a ${moeda} ${valorConvertido}`;
        console.log(cotacaoMoeda);
        return cotacaoMoeda; // Retorna o valor da cotação
    } catch (error) {
        console.error('Erro ao buscar cotação da moeda:', error); // Tratamento de erro
    }
    return 5;
}
