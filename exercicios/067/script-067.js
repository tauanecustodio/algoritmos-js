const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    textArea.innerHTML = '';

    const number = parseInt(document.getElementById('number').value);

    if (isNaN(number) || number <= 0) {
        textArea.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    for(let i = 1; i <= number; i++) {
        textArea.innerHTML += i + ', ';
    }
    textArea.innerHTML += "FIM!"
})