const textArea = document.getElementById('text-area');

function superSomador(firstNumber, lastNumber) {
    let sum = 0;
    for (let i = firstNumber; i <= lastNumber; i++) {
        sum += i;
    }
    return sum;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    let firstNumber = parseInt(document.getElementById('first-number').value);
    let lastNumber = parseInt(document.getElementById('last-number').value);

    if(lastNumber < firstNumber) {
        textArea.innerHTML = "O primeiro número deve ser menor ou igual ao segundo número.";
        return;
    } else if (isNaN(firstNumber) || isNaN(lastNumber)) {
        textArea.innerHTML = "Por favor, insira valores numéricos.";
        return;
    }

    textArea.innerHTML = `Resultado: ${superSomador(firstNumber, lastNumber)}`;
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('first-number').value = '';
    document.getElementById('last-number').value = '';

    textArea.innerHTML = '';
})