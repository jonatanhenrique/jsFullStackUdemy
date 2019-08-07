// function sem retorno

function imprimeSoma (a,b){
    console.log(a+b);
}

imprimeSoma(2,3);
imprimeSoma(2); // NaN (2 parametro undefined)

//function retorna
function soma(a, b=0){
    return a + b;
}

console.log(soma(2,3));