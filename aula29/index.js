const pessoa = {
    nome: "Leo",
    sobrenome: "Saes",
    idade: 17,
    endereco: {
        rua: "Osvaldo de Jesus",
        numero: 120
    }
};
// atribuição via desestruturação
const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero);
