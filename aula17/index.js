// CRIANDO OBJETOS

const pessoa1 = {
    nome: 'Leonardo',
    sobrenome: 'Saes',
    idade: 17
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade)





const pessoa2 = {
    nome: 'Simone',
    sobrenome: 'Saes',
    idade: 45
};

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)






// ARGUMENTO É O VALOR PASSADO PARA O PARÂMETRO

// FUNÇÃO PARA FACILITAR A CRIAÇÃO DE PESSOAS


                 //  PARÂMETROS
function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade:idade
    }
}
                       //  ARGUMENTOS
const pessoa = criaPessoa('Leonardo', 'Saes', 17)
console.log(pessoa)


