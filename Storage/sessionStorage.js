


let vetor = ['pera','banana','manga']

sessionStorage.setItem('frutas', JSON.stringify(vetor))
let recupDado = JSON.parse(sessionStorage.getItem('frutas'))
recupDado[3] = 'Morango';
recupDado[1] = 'Parchita'
//console.log(recupDado)

let strRecupDados = JSON.stringify(recupDado)
//console.log(strRecupDados)
sessionStorage.setItem('frutas', strRecupDados)