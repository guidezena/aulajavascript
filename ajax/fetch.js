document.
    querySelector('button').
    addEventListener('click', recuperaDados);


function recuperaDados(evento) {
    evento.preventDefault()

    fetch('http://127.0.0.1:5500/ajax/conteudo.txt').then(function (ret) {


        return ret.text()

    }).then(function (cont) {

        let data = JSON.parse(cont)
        let saida = ""
        data.forEach(function (aluno) {
            saida += aluno.idade >= 18 ?
                `${aluno.nome} é maior de idade <br> ` :
                `${aluno.nome} é menor de idade <br> `

        });
        console.log(data)
        document.querySelector('#dadoRecuperado').innerHTML = saida
    })
}
