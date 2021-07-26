/* 
Valores Primitivos (imutáveis - não podem ser mudados) - string, number, boolean, 
undefined, null(bigint, symbol) - OS VALORES MUDAM, A VARIAVEL QUE NÃO MUDA -- valores copiados
*/

// INDEXADA = QUE POSSUI INDICES

// EXEMPLO

            012 // indices
let nome = 'Leo';
nome[0] = 'R'; // o indice 0 não foi mudado, portanto, essa linha é inútil
console.log(nome[0], nome)



let a = 'A'
let b = a // Cópia do valor de a para b
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)


/* 
Valores com Referência (mutáveis - podem ser mudados) - array, object, 
function -- passados por referência
*/
let a = [1,2,3]
let b = a
