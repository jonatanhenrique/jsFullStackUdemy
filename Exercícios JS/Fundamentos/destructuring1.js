const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: "rua abc",
        numero: 1000
    }
}

const {nome, idade } = pessoa; // tira de dentro do obj nome idade do obj pessoa

console.log(nome, idade);

const {nome: n, idade: i} = pessoa; // atribui variavel
console.log(n,i);

const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const {endereco: {logadouro, numero, cep} } = pessoa;
console.log(logadouro,numero);