//dom
const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const ddia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const menssagem = document.querySelector('#menssagem')
// const imagi = document.querySelector('#imagi')


//evento
setInterval(relogio, 1000)

// funçoes


function relogio(){

    let dia = new Date()
    let hr = dia.getHours();
    let min = dia.getMinutes();
    let seg = dia.getSeconds();
    let d = dia.getDate();
    let m = dia.getMonth() + 1;
    let year = dia.getFullYear();



    if (hr < 10) {
        hr = '0' + hr;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (seg < 10) {
        seg = '0' + seg;
    }
    if (d < 10) {
        d = '0' + d;
    }

    if (m < 10) {
        m = '0' + m;
    }

    // menssagem
    if(hr>=5 && hr<12){
        menssagem.textContent = 'BOM DIA!!!'
    }else if(hr>=12 && hr<18){
        menssagem.textContent= 'BOA TARDE!!!'
    }
else{
    menssagem.textContent= 'BOA NOITE!!!'
}


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    ddia.textContent = d;
    mes.textContent = m;
    ano.textContent = year;





}

































// if (hr >= 18 || hr < 7) {

//     //noite e madrugada
//     document.querySelector('#sun').src = "img/solDormindo.png";
//     document.querySelector('body').setAttribute("class", "night");

// } else if ((hr >= 15 && min >= 30) || (hr >= 16)) {

//     //tarde
//     document.querySelector('#sun').src = "img/solCansado.png";
//     document.querySelector('body').setAttribute("class", "afternoon");

// } else {

//     //manhã
//     document.querySelector('#sun').src = "img/solFeliz.png";
//     document.querySelector('body').setAttribute("class", "moorning");

// }
