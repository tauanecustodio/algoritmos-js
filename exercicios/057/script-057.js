const textArea = document.getElementById('text-area');

let gender;
let wage = 0;
let totalWageFeminine = 0;
let totalWageMasculine = 0;

function clearInputs() {
    document.getElementById('gender').value = '';
    document.getElementById('wage').value = '';
}

document.getElementById('adicionar').addEventListener('click', function(e) {
    e.preventDefault();

    gender = document.getElementById('gender').value;
    wage = parseFloat(document.getElementById('wage').value);

    if (gender === '') {
        textArea.innerHTML = 'Informe seu sexo';
        return
    } else if (isNaN(wage)) {
        textArea.innerHTML = 'Informe seu salário';
        return
    }
    
    if (gender === 'feminine') {
        totalWageFeminine += wage;
    } else {
        totalWageMasculine += wage;
    }

    clearInputs();
    textArea.innerHTML = '';
})

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    clearInputs();

    textArea.innerHTML = `Soma dos salários pagos:<br>Aos homens: R$${totalWageMasculine.toFixed(e)} <br>Ás mulheres: R$${totalWageFeminine}`;
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    clearInputs();
    textArea.innerHTML = '';

    gender;
    wage = 0;
    totalWageFeminine = 0;
    totalWageMasculine = 0;
})