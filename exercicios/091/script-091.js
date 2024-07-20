const textArea = document.getElementById('text-area');

function maior(number1, number2) {
    if (number1 > number2) {
        textArea.innerHTML = "O primeiro valor é o maior"
    } else if (number2 > number1) {
        textArea.innerHTML = "O segundo valor é o maior"
    } else if (number1 == number2) {
        textArea.innerHTML = "Não existe valor maior, os dois são iguais"
    } else if (isNaN(number1)  || isNaN(number2)) {
        textArea.innerHTML = "Insira dois valores válidos";
    }
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    maior(number1, number2);
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    textArea.innerHTML = "";
});