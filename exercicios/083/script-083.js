const textArea = document.getElementById('text-area');

document.getElementById('generate-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const randomNumbers = [];

    for(let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * (99 - 0 + 1) + 0);
        randomNumbers.push(randomNumber);
    }

    textArea.innerHTML = `Números sorteados: ${randomNumbers.join(', ')}<br>Em ordem crescente: ${randomNumbers.sort().join(', ')}`;
})