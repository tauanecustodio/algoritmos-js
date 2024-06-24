const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
const calcularBtn = document.querySelector('button[type="submit"]');
let number = 0;
let soma = 0;
let contador = 1;

calcularBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Obter e validar número digitado
    number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number < 0) {
        return;
    }

    // limpae campo de imput para o próximo número ser digitado
    document.getElementById('number').value = "";

    // Atualizar soma e contador
    soma += number;
    contador++;

    // Atualizar o nome do contador
    textContador.textContent = contador <= 7 ? contador : 1;

    // Alterar o nome do botão ou parar a aplicação
    if (contador === 7) {
        calcularBtn.textContent = "Calcular";
    } else if (contador === 8) {
        calcularBtn.textContent = "Somar";
    } else if (contador > 8) {
        return;
    }

    // menor que 7 concatena os números digitados, igual a 7 exibe o resultado e maior que para o código
    if (contador < 8) {    
        textArea.innerHTML += `${number} + `;
    } else if (contador == 8){
        textArea.innerHTML += `${number} <br>Soma: ${soma}`;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('number').value = "";
    textArea.innerHTML = "";
    calcularBtn.textContent = "Somar";
    textContador.textContent = 1;
    soma = 0;
    contador = 1;
})