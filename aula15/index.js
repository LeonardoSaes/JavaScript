//              0        1           2        = INDICES
const alunos = ['Luiz', 'Leonardo', 'Matheus']; // array criado


alunos.push('Duda') // função para adicionar elemento no fim do array

alunos.unshift('Ótavio') // função para adicionar no começo e move todos os outros

const removido = alunos.pop() // remove o ultimo elemento do array e armazena 
console.log(removido)

const removido2 = alunos.shift() // remove o primeiro elemento do array e armazena
console.log(removido2)

delete alunos[2] // deleta o indice 2 e deixa vazio
console.log(alunos)

console.log(alunos[50]) // acessando um elemento que não existe vai retornar "undefined"
console.log(alunos.slice(0, 3)) // fatia o array e mostra só do 0 até o 2
console.log(alunos.slice(0, -2)) // fatia o array e mostra todos, menos os dois ultimos 

alunos[alunos.length] = 'Leo' // adiciona um item no array sem mostrar o tamanho do array

alunos[0] = 'Eduardo'; // modifiquei o indice 0

alunos[3] = 'Maria'; // adicionei o indice 3

console.log(alunos)
console.log(alunos[0]) // mostrei só o indice 0
console.log(alunos[1]) // mostrei só o indice 1
console.log(alunos[3]) // mostrei só o indice 3
console.log(alunos.length) // mostra o tamanho do meu array 

console.log(typeof alunos) // mostra que array é um objeto
console.log(alunos instanceof Array) // mostra se é uma instancia de array
