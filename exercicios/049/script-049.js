const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
let number = 0;
let impar = 0;
let par = 0;
let contador = 0;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    number = parseInt(document.getElementById('number').value);
    if (!number) {
        return;
    } else if (number % 2 == 0) {
        par++;
    } else if (number % 2 == 1) {
        impar++;
    }

    contador++;
    if (contador < 6){
        textContador.innerHTML = contador + 1;
    } else {
        textContador.innerHTML = 1;
    }
    
    if (contador <= 6) {    
        textArea.innerHTML = `Pares: ${par} <br>Ímpar: ${impar}`;
    } else if (contador > 6) {
        return;
    }

    document.getElementById('number').value = "";

})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('number').value = "";
    textArea.innerHTML = "";
    par = 0;
    impar = 0;
    contador = 0;
})