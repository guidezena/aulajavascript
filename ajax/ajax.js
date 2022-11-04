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

            let user = prompt('Qual o seu nome?')
            data.forEach(function(valor){
                if(valor.nome == user && valor.idade < 18){
                    alert("Usuario menor de idade")
                }else if(valor.nome !== user){
                    alert('Não existe esse usuario')
                }else{
                    alert('Usuario maior de idade')
                }
            });
        }
    }

    XHR.send();


}        