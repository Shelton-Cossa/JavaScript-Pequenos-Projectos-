const liga = document.getElementById('liga');
const desliga = document.getElementById('desliga');
let alterar = true;

function ligar() {
    const lamp = document.getElementById('lamp');
    if (alterar) {
        lamp.src = "img/ligada.jpg";
    }
}

function desligar() {
    const lamp = document.getElementById('lamp');
    if (alterar) {
        lamp.src = "img/desligada.jpg";        
    }
}
function quebrar() {
    alterar = false;
    const lamp = document.getElementById('lamp');
    lamp.src = "img/quebrada.jpg";
}