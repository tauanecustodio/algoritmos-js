const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
let altura = 0;
let peso = 0;
let contador = 0;

let somaAlturas = 0;
let mediaAltura = 0;
let mais90Kg = 0;
let menos50KgMenos160Cm = 0;
let mais190CmMais100Kg = 0;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    altura = parseInt(document.getElementById('height').value);
    peso = parseFloat(document.getElementById('weight').value);

    if (isNaN(altura) || isNaN(peso)) {
        return;
    } else {
        somaAlturas += altura;
        if (peso > 90) {
            mais90Kg++;
        }
    }
    mediaAltura = somaAlturas / 7;

    if (peso < 50 && altura < 160) {
        menos50KgMenos160Cm++;
    } else if (peso > 100 && altura > 190) {
        mais190CmMais100Kg++;
    }

    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';

    contador++
    textContador.textContent = contador < 7 ? (contador + 1) : 1;

    if (contador > 6) {
        textArea.innerHTML = `Média das alturas: ${mediaAltura.toFixed(2)}<br>Pessoas com mais de 90kg: ${mais90Kg}<br>Pessoas com menos de 50kg e menos de 160cm: ${menos50KgMenos160Cm}<br>Pessoas com mais de 100kg e mais de 190cm: ${mais190CmMais100Kg}`;
    } else {
        return;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    textArea.innerHTML = "";
    textContador.innerHTML = 1;
    altura = 0;
    peso = 0;
    contador = 0;

    somaAlturas = 0;
    mediaAltura = 0;
    mais90Kg = 0;
    menos50KgMenos160Cm = 0;
    mais190CmMais100Kg = 0;
})