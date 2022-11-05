document.
    querySelector('button').
    addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax() {

    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true);

    XHR.onload = function () {

        if (this.status == 200) {

            let data = JSON.parse(this.responseText)
            
                console.log(data)
            //document.querySelector('#dadoRecuperado').innerHTML
            //  = this.responseText;

            let saida = ""
            data.forEach(function(aluno) {
                saida += aluno.idade >= 18 ?
                    `${aluno.nome} é maior de idade <br> ` :
                    `${aluno.nome} é menor de idade <br> `

            });
            console.log(data)
            document.querySelector('#dadoRecuperado').innerHTML = saida

            /*let user = prompt('Qual o seu nome?')
            data.forEach(function (element) {
                if (element.nome == user && element.idade < 18) {
                    alert("Usuario menor de idade")
                } else if (element.nome !== user) {
                    alert('Não existe esse usuario')
                } else {
                    alert('Usuario maior de idade')
                }

            });*/
        }
    }

    XHR.send();


}        