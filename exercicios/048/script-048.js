const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
let number = 0;
let soma = 0;
let contador = 0;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    // number recebe o número digitado e é validado
    number = parseInt(document.getElementById('number').value);
    if (!number) {
        return;
    }

    // soma o número digitado ao valor de antes e aumenta o contador
    soma += number;
    contador++;
    textContador.innerHTML = contador + 1;
    
    // menor que 7 concatena os números digitados, igual a 7 exibe o resultado e maior que para o código

    if (contador < 7) {    
        textArea.innerHTML += `${number} + `;
    } else if (contador == 7){
        textArea.innerHTML += `${number} <br>Soma: ${soma}`;
        textContador.innerHTML = 1;
    } else if (contador > 7) {
        return;
    }

    // troca o nome do botão de somar para calcular no penúltimo número
    if (contador == 6) {
        document.getElementById('calc-btn').innerHTML = "Calcular";
    }
    
    // limpa o campo de imput para o próximo número ser digitado
    document.getElementById('number').value = "";
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('number').value = "";
    textArea.innerHTML = "";
    soma = 0;
    contador = 0;
    document.getElementById('calc-btn').innerHTML = "Somar";
})