// FUNÇÃO QUE RETORNA "BOM DIA + NOME"

function saudacoes(nome){
    return `Bom dia, ${nome}! `;
}

const variavel = saudacoes('Leo');
console.log(variavel);






// FUNÇÃO DE SOMA

// poderia atribuir os valores padrão: soma(x = 2, y = 4)
function soma(x, y){
    const resultado = x + y
    return resultado
}

const resultado = soma(1, 2) // atribui os valores ao x e y
console.log(resultado)







// FUNÇÃO RAIZ QUADRADA

const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9))
console.log(raiz(25))

// jeito simplificado da de cima

const raiz = n => n ** 0.5

console.log(raiz(9))
console.log(raiz(25))