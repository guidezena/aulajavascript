const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos() {

    //evento para adicionar a tarefa
    btnAddTarefa.addEventListener('click', adicionarTarefa);
    //evento para fazer o x funcionar (apagar uma única tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
}
carregaMonitoresDeEventos();

function apagarTarefa(evento) {

    //se o elemento pai tiver a classe apaga-tarefa,
    //ou seja, for o elemento "a", apague li, ou seja, 
    //a tarefa
    if (evento.target.parentElement.classList.contains('apaga-tarefa')) {

        //apaga o elemento pai do "a", ou seja, o li, pois
        //o elemento alvo do evento foi o i 
        evento.target.parentElement.parentElement.remove();
    }
}

function filtrarTarefa(evento){
    document.addEventListener('keypress', (evento) => )
}

function adicionarTarefa(evento) {
    evento.preventDefault();

    //verifica se usuário entrou com uma tarefa
    if (entradaTarefa.value === '') {
        alert('Entre com uma tarefa');
        return false
    }

    //cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //cria a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //apaga o input para entrada
    entradaTarefa.value = '';
}



