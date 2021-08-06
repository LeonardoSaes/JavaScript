// Escreva uma função que recebe 2 numeros e retorne o maior deles


function maxNumber(x,y){
    return x > y ? x: y;
}

//Função com Arrow Function
const max2 = (x, y) => {
    return x > y ? x : y;
}

console.log(maxNumber(10, 2));
