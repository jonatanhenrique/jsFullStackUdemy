function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima de : ${area}m2`); // noif nao tem retorno explicito entao: undefined
    }else
        return area;
}

console.log(area(2,2));
console.log(area(2));
console.log(area());
console.log(area(2,3,5,4,6));
console.log(area(5,5));