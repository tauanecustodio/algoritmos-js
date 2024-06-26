// declarações de variáveis
const textArea = document.getElementById('text-area');
let randomNumber;
let tentativas;
let acertou;

// funções
function iniciarJogo() {
    randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    tentativas = 4;
    acertou = false;
    textArea.innerHTML = '';
    document.getElementById('suggested-number').value = '';
}

// eventos

iniciarJogo();

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (acertou || tentativas < 0) {
        return;
    }

    const suggestedNumber = parseInt(document.getElementById('suggested-number').value);

    if (isNaN(suggestedNumber) || suggestedNumber < 1 || suggestedNumber > 10) {
        textArea.innerHTML = "Insira um número válido";
        return;
    } 
    console.log(randomNumber);
    if (suggestedNumber == randomNumber) {
        textArea.innerHTML = "Parabéns, você acertou!";
        acertou = true;
    } else {
        tentativas--;
        if (suggestedNumber < randomNumber) {
            textArea.innerHTML = `O número sorteado é maior <br>Tentavivas restantes: ${tentativas}`;
        } else if (suggestedNumber > randomNumber) { 
            textArea.innerHTML = `O número sorteado é menor <br>Tentavivas restantes: ${tentativas}`;
        }
        if (tentativas === 0) {
            textArea.innerHTML = `Não foi dessa vez,suas tentativas acabaram. O número sorteado foi ${randomNumber}`;
        }
    };
    document.getElementById('suggested-number').value = '';
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    iniciarJogo();
});