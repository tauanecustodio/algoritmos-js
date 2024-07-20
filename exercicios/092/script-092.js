const textArea = document.getElementById('text-area');

function checkNumber(number) {
    if (number % 2 === 0) {
        textArea.innerHTML = `${number} é um número par`;
    } else {
        textArea.innerHTML = `${number} é um número ímpar`;
    }
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const number = parseInt(document.getElementById('number').value);

    if (isNaN(number)) {
        textArea.innerHTML = "Digite um número inteiro válido!";
        return;
    }

    checkNumber(number);
})