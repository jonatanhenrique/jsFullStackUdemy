const saudacao = 'Opa'; // contexto léxico 1
function exec(){
    const saudacao = 'Falaaa'; // contexto léxico 2
    return saudacao;
}

// objetos sao grupos aninhados de pares

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso:90,
    endereco: {
        logadouro: "Rua muito legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);