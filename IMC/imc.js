function calcular() {
    // alert('ola')
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    
    let imc = Number(peso) / (Number(altura) * Number(altura));

    if (imc < 18.5) {
    document.getElementById('resultado').value = `Olá ${nome}, o seu imc é ${imc.toFixed(2)}kg/m2, você está abaixo do peso`;
    } else if(imc < 25){
        document.getElementById('resultado').value = `Olá ${nome}, o seu imc é ${imc.toFixed(2)}kg/m2, você tem o peso adequado`;
    } else if(imc < 30){
        document.getElementById('resultado').value = `Olá ${nome}, o seu imc é ${imc.toFixed(2)}kg/m2, você está sobrepeso(Gordo)`;
    } 
    else {
        document.getElementById('resultado').value = `Olá ${nome}, o seu imc é ${imc.toFixed(2)}kg/m2, você está na obesidade`;
    }
}