/* 

OPERADORES DE COMPARAÇÃO
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (só checa valor) ************
=== igualdade estrita (checa valor e tipo)
!= diferente (só checa valor) ************
!== diferente estrito (valor e tipo)

*/
// RETORNA TRUE, POR ISSO NÃO UTILIZAMOS == E SIM ===
/* const num1 = 10;
const num2 = '10';
const comp = num1 == num2;
console.log(comp)
 */

// MANEIRA CERTA 
const num1 = 10;
const num2 = "10";
const comp = num1 === num2;
console.log(comp)


// MANEIRA QUE NÃO UTILIZAMOS
/* const numero1 = 10;
const numero2 = '10';
const comparacao = numero1 != numero2;
console.log(comparacao)
 */


// MANEIRA CERTA
const numero1 = 10; // number
const numero2 = '10'; // string
const comparacao = numero1 !== numero2
console.log(comparacao)
