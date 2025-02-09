'use strict';

const sons = {
    'A': 'boom.wav',
    'J': 'clap.wav',
    'G': 'hihat.wav',
    'M': 'kick.wav',
    'Y': 'openhat.wav',
    'F': 'ride.wav',
    'H': 'snare.wav',
    'P': 'tink.wav',
    'C': 'tom.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div)
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`./sons/${sons[letra]}`);
    audio.play();
}

const ativarDiv = (evento) => {
    let letra = '';
    if (evento.type == 'click') {
        letra = evento.target.id;
    } else{
        letra = evento.key.toUpperCase();
    }
    const letraPermitida = sons.hasOwnProperty(letra)
    if (letraPermitida) {
        tocarSom(letra);
    }
}


exibir(sons);

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);