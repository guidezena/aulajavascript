let amigos = ['bono',
'paulo',
'amanda',
'laura',
'joao'
];
console.log(amigos.length)

for (let i = 0; i < amigos.length; i++){
    console.log(`Linha: ${amigos[i]}`)
}

//Foreach

amigos.forEach(function(valor,indice){
    console.log(`${valor} : ${indice}`)
});

//map

let teste = amigos.map(function(valor, indice){
    console.log(`${valor} : ${indice}`)
})
// FAZER UM EXERCICIO REFERENTE AO SERVIÇO
//E PRAZO QUE VOCE PRECISA ENTREGAR, COLOCANDO OS DADOS EM UMA MATRIZ