const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalNumbersAdd = 0;
let sumNumbers = 0;
let smallestNumber = 0;
let averageNumber = 0;
let pairNumbers = 0;

function clearVariables() {
    textTotalPerson.innerHTML = '(0)';
    totalNumbersAdd = 0;
    sumNumbers = 0;
    smallestNumber = 0;
    averageNumber = 0;
    pairNumbers = 0;
}

document.getElementById('adicionar').addEventListener('click', function(e) {
    e.preventDefault();
    
    const number = parseInt(document.getElementById('number').value);
    
    if (isNaN(number) || number <= 0) {
        textArea.innerHTML = 'Informe um número válido positivo';
        return;
    }
    
    textArea.innerHTML = "";
    totalNumbersAdd++;
    textTotalPerson.innerHTML = `(${totalNumbersAdd})`;
    sumNumbers += number;

    if (smallestNumber === 0 || number < smallestNumber) {
        smallestNumber = number;
    }

    if (number % 2 === 0) {
        pairNumbers++;
    }

    document.getElementById('number').value = '';
})

document.getElementById('comparar').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (totalNumbersAdd === 0) {
        textArea.innerHTML = 'Adicione pelo menos um número antes de comparar';
        return;
    }

    averageNumber = sumNumbers / totalNumbersAdd;

    textArea.innerHTML = `Soma: ${sumNumbers} <br>
                        Menor número: ${smallestNumber} <br>
                        Média: ${averageNumber.toFixed(2)} <br>
                        Números pares: ${pairNumbers} <br>`;
    clearVariables();
})

document.getElementById('limpar').addEventListener('click', function(e) {
    e.preventDefault();

    clearVariables();
    
    document.getElementById('number').value = '';
    
    textArea.innerHTML = '';
})