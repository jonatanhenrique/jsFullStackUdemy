const imprimeResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
}

imprimeResultado(10);
imprimeResultado(7);
imprimeResultado(5);
imprimeResultado(2);
imprimeResultado(-1);