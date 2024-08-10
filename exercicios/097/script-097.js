const textArea = document.getElementById('text-area');

function maior(number1, number2, number3) {
    if (isNaN(number1)  || isNaN(number2) || isNaN(number3)) {
        textArea.innerHTML = "Insira dois valores válidos";
    } else {
        let bigNumber;
        arrNumbers = [number1, number2, number3];
        for(let i = 0; i < 3; i++) {
            if(arrNumbers[i] > bigNumber || bigNumber === undefined) {
                bigNumber = arrNumbers[i];
            }
        }
        textArea.innerHTML = `O maior número é: ${bigNumber}`;
    }
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);
    
    maior(number1, number2, number3);
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
    document.getElementById('number3').value = "";

    textArea.innerHTML = "";
});