const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let corIndex = 0;
let intervalId = null;

const transito = ()=> {
    pararAutomatico();
    ligar[event.target.id]();
}

const proximoIndex = () =>{
    corIndex = corIndex < 2 ? ++ corIndex  : 0;
    // if (corIndex < 2) {
    //     corIndex++;  
    // } else{
    //     corIndex = 0;
    // }
}

const pararAutomatico = () => {
    clearInterval(intervalId);
}

const trocar = ()=>{
    const cores = ['vermelho','amarelo','verde']
    const cor = cores[corIndex];
    ligar[cor]();
    proximoIndex();
}

const ligar = {
    'vermelho': () => img.src = "./img/vermelho.png",
    'amarelo': () => img.src = "./img/amarelo.png",
    'verde': () => img.src = "./img/verde.png",
    'automatico': () => intervalId = setInterval(trocar, 1000)
}
buttons.addEventListener('click', transito);
