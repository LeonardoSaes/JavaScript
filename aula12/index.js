let num1 = 10.2353535; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2)  *// Tranforma o num1 em string
console.log(num1.toString(2)) // Transforma em binário
console.log(Number.isInteger(num1))  // retorna true se for um numero inteiro, false se for flutuante
console.log(num1.toFixed(2)) // arredonda o numero
 
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // retorna false se as duas variaveis forem numeros, true se só uma for numero



