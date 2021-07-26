/*
Incremento = ++
Decremento = --
*/

/*
ORDEM DOS ARITMÉTICOS

() = PARENTESES
** = POTENCIAÇÃO
* / % = MULTIPLICAÇÃO, DIVISÃO E RESTO DA DIVISÃO
+- = SOMA E SUBTRAÇÃO

*/

let contador = 0
contador =+ 2 // = contador = contador + 2
console.log(contador)

// NaN - Not a number
const num1 = 10
const num2 = 'Leo'
console.log(num1 * num2)

/* porem ele consegue fazer a conversão do exemplo a seguir */

const number1 = 10
const number2 = '5.2' // retorna só a parte inteira do número
console.log(number1 * number2)

/* convertendo string para int */

const numero1 = 10
const numero2 = parseInt('5')
console.log(numero1 * numero2)

const n1 = 10
const n2 = parseFloat('5.2') // converte uma string para float
console.log(n1 + n2) 
