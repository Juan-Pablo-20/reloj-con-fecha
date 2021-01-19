let date = new Date();
let hora = date.getHours();
let minuto = date.getMinutes();
let segundo = date.getSeconds();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const divH = document.querySelector(".divHora");
const divM = document.querySelector(".divMin");
const divS = document.querySelector(".divSec");
const puntos1 = document.querySelector(".puntos1");
const puntos2 = document.querySelector(".puntos2");
document.querySelector(".dia").innerHTML = date.getDate();
document.querySelector(".mes").innerHTML = meses[date.getMonth()];
document.querySelector(".year").innerHTML = date.getFullYear();

let weight = [divH, divM, divS, puntos1, puntos2];

for (var i = 0; i < weight.length; i++) {
    weight[i].style.fontWeight = "bold";
}

const ceros = (div, h) => {
    if (h <= 9) {
        div.innerHTML = `0${h}`; //esto es para que aparezca el cero en los numeros decimales
    } else {
        div.innerHTML = h;
    }
}

ceros(divH, hora);
ceros(divM, minuto);
ceros(divS, segundo);

const contador = () => {
    if (segundo == 59) {
        segundo = 0;

        if (minuto == 59) {
            minuto = 0;
            ceros(divM, minuto);
            if (hora == 23) {
                hora = 0;
                ceros(divH, hora);
            } else {
                hora += 1;
                ceros(divH, hora); //estas funciones estan en estos lugares para optimizar recursos
            }
        } else {
            minuto += 1;
            ceros(divM, minuto);
        }

    } else {
        segundo += 1;
    }

    ceros(divS, segundo);

    let puntos = segundo % 2;

    if (puntos == 0) {
        puntos1.innerHTML = ":";
        puntos2.innerHTML = ":";
    } else {
        puntos1.innerHTML = "";
        puntos2.innerHTML = "";
    }
}

setInterval(contador, 1000);
