
// forma literal
function fun1(){}

// armazenar em var
const cons = function (){}

// armazenar em array
const array = [function(a,b){return a + b}, fun1, cons];

console.log(array[0](2,3));

// armazenar em atributo de um obj
const obj = {}
obj.falar = function(){ return 'olá'}
console.log(obj.falar());

// passar como param
function run(fun){
    fun();
}

run(function() {console.log("Executando funcao dentro de run")});

//Funcao pode  retornar funcao

function soma (a,b){
    return function(c){
        console.log(a+b+c);
    }
}
soma(2,3)(5);