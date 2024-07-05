const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    textArea.innerHTML = '';

    const number = parseInt(document.getElementById('number').value);

    if (isNaN(number)) {
        textArea.innerHTML = 'Por favor digite um número válido'
        return;
    }

    for(let i = 0; i <= 10; i++) {
        textArea.innerHTML += `${number} x ${i} = ${number * i}<br>`;
    }
})