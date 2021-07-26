//               0123456789 = indices
let umaString = 'O rato roeu a roupa do rei de roma'

console.log(umaString.length); // verifica qual o trabalho da string

console.log(umaString.replace('Roma', 'Brasil' )) // substitui alguma coisa por outra

console.log(umaString.replace(/r/g, 'l' )) // substitui todos os r por l, se tirar o g só faz uma vez

console.log(umaString.indexOf('O')) // mostra em qual indice a string está

console.log(umaString.indexOf('O', 3)) // mostra em qual indice a string está começando pelo indice 3

console.log(umaString.lastIndexOf('m')) // faz o mesmo que o anterior, só que começa de tras para frente

console.log(umaString.slice(2, 6)) // verifica o que tem nesses indices

console.log(umaString.slice(-4)) // começa de tras para frente 

console.log(umaString.split(" ", 2)) // divide as palavras, só duas vezes

console.log(umaString.toLowerCase()) // deixa a string toda minuscula

console.log(umaString.toUpperCase()) // deixa a string toda maiuscula

