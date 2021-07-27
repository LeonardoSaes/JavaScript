// const tresHoras = 60 * 60 * 3 * 1000; mil para milésimos
// const umDia = 60 * 60 * 24 * 1000;

/* const data = new Date('2021-04-20 20:20:57'); // 20/04/2021 as 20h20min57seg 
console.log('Dia', data.getDate()); // dia da semana
console.log('Mês', data.getMonth() + 1); // + 1 pq o mes começa do zero, mes da semana
console.log('Ano', data.getFullYear()); // ano
console.log('Hora', data.getHours()); // horas
console.log('Min', data.getMinutes()); // minutos
console.log('Seg', data.getSeconds()); // segundos
console.log('milisegundos', data.getMilliseconds()); // milisegundos
console.log('Dia semana', data.getDay()); // dia da semana
console.log(data.toString());
 */

// Função para adicionar o zero as datas
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
// Função para mostrar a data e hora
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)