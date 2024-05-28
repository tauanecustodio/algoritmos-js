const textArea = document.getElementById('text-area');
const permittedSpeed = 80; // velocidade permitida
const speedingFine = 5; // valor da multa por cada km/h acima

function fineValue(speed, permittedSpeed) {
    return (speed - permittedSpeed) * 5;
};

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const speed = parseFloat(document.getElementById('speed').value);

    if (speed <= 80) {
        textArea.innerHTML = "Continue dirigindo em segurança e boa viagem!";
    } else {
        const fine = fineValue(speed, permittedSpeed);
        textArea.innerHTML = `Seu carro ultrapassou o limite permitido nessa via de ${permittedSpeed}km/h <br>Multa: R$${fine.toFixed(2)}`;
    };
});