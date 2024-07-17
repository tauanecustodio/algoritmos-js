const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const randomNumbers = [];
    for (let i = 0; i < 30; i++) {
        randomNumbers.push(Math.floor(Math.random() * (15 - 1 + 1) + 1));
    }

    const number = parseInt(document.getElementById('number').value);
    if (isNaN(number) || number < 1 || number > 15) {
        textArea.innerHTML = "Por favor, insira um número entre 1 e 15.";
        return;
    }
    textArea.innerHTML = "";

    const positions = [];
    randomNumbers.forEach((num, index) => {
        if (num === number) {
        positions.push(index);
        }
    });

    // Contar quantas vezes o número aparece
    const count = positions.length;

    if (count > 0) {
        textArea.innerHTML = `O número ${number} aparece ${count} vez(es) e foi sorteado nas posições: ${positions.join(', ')}.`;
    } else {
        textArea.innerHTML = `O número ${number} não está entre os sorteados.`;
    }

    textArea.innerHTML += `<hr>Números sorteados: ${randomNumbers.join(', ')}`;

})