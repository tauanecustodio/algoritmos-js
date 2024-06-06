const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const suggestedNumber = parseInt(document.getElementById('suggested-number').value);

    if (isNaN(suggestedNumber)) {
        textArea.innerHTML = "Insira um número válido";
        return;
    };

    let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);

    if (suggestedNumber == randomNumber) {
        textArea.innerHTML = "Parabéns, você acertou!";
    } else {
        textArea.innerHTML = `Não foi dessa vez, o número sorteado foi ${randomNumber}, tente novamente!`;
    };
});