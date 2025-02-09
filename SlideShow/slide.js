'use strict';

const images = [
    {'id': '1', 'url':'./img/peakpx (1).jpg'},
    {'id': '2', 'url':'./img/peakpx (3).jpg'},
    {'id': '3', 'url':'./img/peakpx (4).jpg'},
    {'id': '4', 'url':'./img/peakpx (6).jpg'},
    {'id': '5', 'url':'./img/peakpx (8).jpg'},
]

const containerItems = document.querySelector('#items')

const loadImages = (images, container) =>{
    images.forEach(image => {
        container.innerHTML +=`
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    });
}


loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const anterior = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const proximo = () =>{
    const lastIntem = items[items.length - 1];
    containerItems.insertBefore(lastIntem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#anterior').addEventListener('click', anterior);
document.querySelector('#proximo').addEventListener('click', proximo);