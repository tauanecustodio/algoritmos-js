const textArea = document.getElementById('text-area');
const numbersList = [];
let totalNumbers = 1;
const numbersAddText = document.getElementById('numbers-add');

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalNumbers > 15) {
        numbersAddText.innerHTML = 1;
        return;
    }

    let number = parseInt(document.getElementById('number').value);
    
    if (isNaN(number)) {
        textArea.innerHTML = "Insira um número válido."
        return;
    }

    numbersList.push(number)
    totalNumbers++;
    numbersAddText.innerHTML = totalNumbers;
    document.getElementById('number').value = '';
    textArea.innerHTML = '';

    if (totalNumbers > 15) {
        totalNumbers = 1;
        numbersAddText.innerHTML = totalNumbers;
        const numbersListFilter = [];
        // novo array apenas com os múltiplos de 10 e em que posição estava no array original
        for(let i = 0; i < numbersList.length + 1; i++) {
            if (numbersList[i] % 10 === 0) {
                numbersListFilter.push(`${numbersList[i]}[${i}]`);
            }
        }
        textArea.innerHTML = `Números adicionados:<br>${numbersList.join(', ')} <br> Divisiveis por 10: <br>${numbersListFilter.join(', ')}`;
        
        if (numbersListFilter.length === 0) {
            textArea.innerHTML += "Nenhum número adicionado é divisível por 10.";
            return;
        }
        
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