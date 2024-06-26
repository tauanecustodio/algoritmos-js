const textArea = document.getElementById('text-area');
let number;
let sumNumbers = 0;
let textResult = '';

function clearAll() {
    document.getElementById('number').value = '';
    textArea.innerHTML = '';
    sumNumbers = 0;
    textResult = '';
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    number = parseInt(document.getElementById('number').value);

    if (isNaN(number)) {
        textArea.innerHTML = textResult + ' ... = ' + sumNumbers + "<br>digite um número válido";
        return;
    } else if (number === 1111) {
        clearAll();
    }

    sumNumbers += number;
    textResult += number + ' + ';
    textArea.innerHTML = textResult + ' ... = ' + sumNumbers;

    document.getElementById('number').value = '';
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    clearAll();
})