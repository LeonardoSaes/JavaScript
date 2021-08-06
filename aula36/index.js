const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros){
    
// não vai mostrar o numero 2
    if(numero === 2){
        console.log('Pulei o número 2')
        continue;
    }
// vai acabar o laço no número 6
    if(numero === 7){
        console.log('7 encontrado, saindo ....')
        break;
    }
    console.log(numero);
}