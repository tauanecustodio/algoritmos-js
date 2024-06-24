const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
let number = 0;
let maior;
let menor;
let contador = 0;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    number = parseInt(document.getElementById('number').value);
    if (!number) {
        return;
    } else if (maior == null && menor == null) {
        maior = number;
        menor = number;
    } else if (number > maior) {
        maior = number;
    } else if (number < menor) {
        menor = number;
    }

    contador++;
    textContador.textContent = contador < 8 ? (contador + 1) : 1
    
    if (contador <= 8) {    
        textArea.innerHTML = `Maior: ${maior} <br>Menor: ${menor}`;
    } else if (contador > 8) {
        return;
    }

    document.getElementById('number').value = "";
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('number').value = "";
    textArea.innerHTML = "";
    textContador.textContent = 1;
    maior = null;
    menor = null;
    contador = 0;
})