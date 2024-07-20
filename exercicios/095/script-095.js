const textArea = document.getElementById('text-area');

function somador(number1, number2) {
    return number1 + number2;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    console.log(number1);
    console.log(number2);

    if (isNaN(number1) || isNaN(number2)) {
        textArea.innerHTML = "Insira valores numéricos válidos";
        return;
    }

    textArea.innerHTML = `Resultado: ${somador(number1, number2)}`;

})