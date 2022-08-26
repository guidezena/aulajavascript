for (var i = 0; i < 10; i++) {
    console.log('Numero da linha' + i)
}

i = 0
while (i < 10) {
    console.log('Bla bla ' + i)
    i++
}

i = 20
do {
    console.log('teste teste ' + i)
    i++
} while (i < 10);

//condicional

var teste = 10
if (teste == 'teste') {
    console.log('O nome da variavel esta igual')
} else {
    console.log('O nome da variavel ta diferente')
}

var teste = 10
if (teste > 1 && teste <= 10) {
    console.log('A variavel se encaixa no padrao 1')
} else {
    console.log('A varivel não se encaixa nesse padrao')
}

switch (teste) {
    case teste > 1:
        console.log('No padrao')
        break;
    case teste <= 10:
        console.log('No padrao')
        break;

    default:
        console.log('O nome da variavel esta diferente')
        break;
}