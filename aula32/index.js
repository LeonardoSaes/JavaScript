// for in -> Lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Saes',
    idade: 17
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
};