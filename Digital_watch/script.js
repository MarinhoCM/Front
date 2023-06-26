const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hrs < 10 ) hrs = '0' + hrs;
    if(min < 10 ) min = '0' + min;
    if(seg < 10 ) seg = '0' + seg;
    
    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = seg;

})