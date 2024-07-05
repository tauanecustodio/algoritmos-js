const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalPerson = 0;
let sunAge = 0;
let averageAge = 0;
let ageOver21 = 0;

function clearVariables() {
    totalPerson = 0;
    sunAge = 0;
    averageAge = 0;
    ageOver21 = 0;
    textTotalPerson.innerHTML = '(0)';
}

document.getElementById('adicionar').addEventListener('click', function(e) {
    e.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    
    if (isNaN(age) || age <= 0) {
        textArea.innerHTML = 'Informe uma idade válida';
        return;
    }
    
    textArea.innerHTML = "";
    totalPerson++;
    textTotalPerson.innerHTML = `(${totalPerson})`;
    sunAge += age;

    if (age > 21) {
        ageOver21++;
    }

    document.getElementById('age').value = '';
})

document.getElementById('comparar').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson === 0) {
        textArea.innerHTML = 'Nenhuma pessoa foi cadastrada.';
        return;
    }

    averageAge = sunAge / totalPerson;

    textArea.innerHTML = `Foram cadastradas ${totalPerson} pessoas.<br>A média de idade é ${averageAge.toFixed(2)}.<br>Há ${ageOver21} pessoas com idade superior a 21 anos.`;

    clearVariables();
})

document.getElementById('limpar').addEventListener('click', function(e) {
    e.preventDefault();

    clearVariables();
    
    textArea.innerHTML = '';
})