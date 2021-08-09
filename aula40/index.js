// Tratando e lançando erros

function soma(x,y){
    if (typeof x !== 'number' || typeof y !=='number'){
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

try{
    // É executada quando não há erros
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}
catch(error){
    // É executada quando há erros
    console.log(error);
}
finally{
    // Sempre é executada
}
