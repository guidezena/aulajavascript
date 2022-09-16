let btnCalcular = document.getElementById('calcular')
btnCalcular.addEventListener('click', function (evento) {
    evento.preventDefault()
    let serv = document.getElementById('servico')
    let resultado = document.getElementById('resultado')
    let prazo = document.getElementById('prazo')

    
    let preco = calculaPreco(serv.value, prazo.value);
    resultado.innerText = `O preço é ${preco}`
})
function calculaPreco(servico, prazo) {
    let tabela = [
        ['$$$', '$$', '$'],
        ['$$$$', '$$$', '$$'],
        ['Não faz', 'Não faz', '$$$']
    ]
    return tabela[servico][prazo]
}

//bitbucket.org/senac-tsi-php/tsi-js-2202/src/e728e450b6a8012bc6025888afe8a88104d01f46/?at=aula%2F09-09-2022