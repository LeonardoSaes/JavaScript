// i = index
for (let i = 0; i <= 5; i ++){
console.log(`Linha ${i}`);
}

// Mostrando Par ou Impar com for 
for (let a = 0; a <= 10; a ++){
    const par = a % 2 == 0 ? 'PAR' : 'ÍMPAR';
    console.log(a, par);
}

// percorrrendo array com for

const frutas = ['Maçã', 'Uva', 'Morango'];

for (let b = 0; b < frutas.length; b++){
    console.log(frutas[b]);
}