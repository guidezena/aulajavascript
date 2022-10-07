const novoTitulo = document.createElement('h2')
novoTitulo.id = 'task-title'
novoTitulo.appendChild(document.createTextNode('Nova Lista'))

const tituloAtual = document.getElementById('task-title')
let divMaeDoTitulo = document.getElementsByClassName('card-action')
console.log(divMaeDoTitulo)
divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual)