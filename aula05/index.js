/*
Leonardo Saes tem 17 anos, pesa 59 kg
tem 1.71 de altura e seu imc é de 20
*/

const nome = "Leonardo Saes";
const idade = 18;
const peso = 59;
const alturaEmM = 1.71;
let imc ;
let anoNascimento ;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

// template strings

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`nasceu em ${anoNascimento}, tem ${alturaEmM} de altura e seu imc é de ${imc}`)

