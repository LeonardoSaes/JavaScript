// ... rest, ... spread
//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

//listas               0          1           2
//listas            0  1  2    0  1  2    0  1  2    
const numeros1 = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
console.log(numeros1[1][2]);

const numeros2 = [ [1, 2, 3], [1, 2, 3], [1, 2, 3]];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
