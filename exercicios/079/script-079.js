const textArea = document.getElementById('text-area');
const numbersList = [];
let totalNumbers = 1;
const numbersAddText = document.getElementById('numbers-add');

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalNumbers > 10) {
        numbersAddText.innerHTML = 1;
        return;
    }

    let number = parseInt(document.getElementById('number').value);
    
    if (isNaN(number)) {
        textArea.innerHTML = "Insira um número válido."
        return;
    }

    if (number % 2 === 0) {
        numbersList.push(`${number}[${totalNumbers}]`);
    } else {
        numbersList.push(number)
    }

    totalNumbers++;
    numbersAddText.innerHTML = totalNumbers;
    textArea.innerHTML = '';
    document.getElementById('number').value = '';

    if (totalNumbers > 10) {
        totalNumbers = 1;
        numbersAddText.innerHTML = totalNumbers;
        
        textArea.innerHTML = `Números adicionados (números pares [] informando a posição):<br>${numbersList.join(', ')}`;
        
        numbersList.length = 0;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    numbersList.length = 0;
    totalNumbers = 1;
    numbersAddText.innerHTML = totalNumbers;
    document.getElementById('number').value = '';
})