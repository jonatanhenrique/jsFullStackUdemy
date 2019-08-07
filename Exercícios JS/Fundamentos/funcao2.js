// armazenando uma function numa variavel

const imprimirSoma = function (a,b){
    console.log(a+b);
}

imprimirSoma(2,3);

// Armazenando uma funcao arrow em variavel

const soma = (a,b) => {
    return a+b;
}

console.log(soma(2,3));

// retorno implícito

const subtracao = (a,b) => a - b; // retorna o resultado
console.log(subtracao(3,2));