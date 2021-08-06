const nome = ["Leonardo" ,"Saes"];


// Os dois fazem a mesma coisa nessa situação

// for in retorna o indice
for (let i in nome){
    console.log(nome[i]);
}

// for of retorna o valor
for (let i of nome){
    console.log(i);
}

// mostra o valor do array, o indice e o array
nome.forEach(function(valor, indice, array) {
    console.log(valor,indice,array);
});

const pessoa = {
    nome: 'Leonardo',
    sobrenome:'Saes'
}

// for in com objetos
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}