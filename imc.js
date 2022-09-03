let peso = prompt('Qual o seu peso')
let altura = prompt('Qual sua altura')

let resultado = calcIMC(peso, altura)
alert(resultado)
function calcIMC(peso, altura) {
    let imc = peso / (altura ^ 2)
    let retorno = ''
    if (imc > 25) {
        retorno = 'Acima do peso'
    } else if (imc >= 18 && imc <= 25) {
        retorno = 'Peso ideal'
    } else {
        retorno = 'abaixo do peso'
    }
    return retorno
}