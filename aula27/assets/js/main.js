/* const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda','Terça-feira','Quarta-feira','Quinta-feira',
        'Sexta-feira','Sábado'];
    return  diasSemana[diaSemana];
}


function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março','abril', 'maio','junho','julho',
        'agosto','setembro','outubro','novembro','dezembro'];
    return meses[numeroMes];
}
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getmMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`+ 
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}` 
    );
}
h1.innerHTML = criaData(data); */

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-br', { dateStyle: 'full'});