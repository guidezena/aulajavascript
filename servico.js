/*
Criar uma calculadora de valor a ser cobrado do cliente
O valor do serviço pode variar conforme o prazo
Os valores e prazos devem ser armanezados em matriz
*/
let tabela = [
    ['$$$','$$','$'],
    ['$$$$','$$$','$$'],
    ['Não faz', 'Não faz','$$$']
]

let servico = prompt('Entre com os serviço : \n0 - Troca de oleo \n1 - Balanceamento\n 2 -')

let prazo = prompt('Entre com o prazo : \n0 - Um dia \n1 - Dois dias \n2 - Três dias');

if(validaEntrada(servico) && validaEntrada(prazo)){
    alert('O serviço ficará em :' + tabela[servico][prazo])
}else{
    alert('ERRO, Verifique os valores inseridos e tente novamente')
}

function validaEntrada(dadoUsuario){
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false
}