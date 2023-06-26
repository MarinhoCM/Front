'use strict';

const formatarDigito = (digito) => `0${digito}`. slice(-2);

const Update = (time) =>{
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');
// converte limita os segundos á 60 e transforma o resto em minutos.
    const qtdSegundos = time % 60;
// munutos * segundos / coverte segundos em  minutos.
    const qtdMinutos = Math.floor((time % (60 * 60)) / 60);
// minutos * segundos * horas / converte minutos em horas.
    const qtdHoras = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
// minutos * horas * dias
    const qtdDias = Math.floor(time / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiava = (time) => {
    const pararContagem = () => clearInterval (id);
    const callback = () => {
        if(time === 0){
            pararContagem();
        }
        Update(time);
        time--;
    }
    const id = setInterval(callback,1000)
}
const tempoRestante = () =>{
    // proximo Eclipse solar
    const dataEvento = new Date ('2022-11-08 23:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiava(tempoRestante());
