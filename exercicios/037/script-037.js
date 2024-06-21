// Declaração de variáveis
const textArea = document.getElementById('text-area');

// funções
function newWage(gender, years, wage) {
    let increase;
    if (gender == 'female') {
        if (years < 15) {
            increase = 0.05;
        } else if (years < 20) {
            increase = 0.12;
        } else {
            increase = 0.23;
        }
    } else {
        if (years < 20) {
            increase = 0.3;
        } else if (years < 30) {
            increase = 0.13;
        } else {
            increase = 0.25;
        }
    }
    return wage + (wage * increase);
}

function dataValidation(name, gender, wage, years) {
    if (!isNaN(name) || !name) {
        return "Informe um nome válido";
    } else if (gender === "") {
        return "Informe seu sexo";
    } else if (isNaN(wage) || wage <= 0) {
        return "Informe seu salário atual";
    } else if (isNaN(years) || years <= 0) {
        return "Informe há quantos anos está na empresa";
    }
    return null;
}

function clearData() {
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('wage').value = '';
    document.getElementById('years').value = '';
    textArea.innerHTML = '';
}

function yearsText(years) {
    return years === 1 ? "ano" : "anos";
}

// Eventos

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const wage = parseFloat(document.getElementById('wage').value);
    const years = parseInt(document.getElementById('years').value);

    const validation = dataValidation(name, gender, wage, years);

    if (validation) {
        textArea.innerHTML = validation;
        return;
    }

    const newWageValue = newWage(gender, years, wage);

    textArea.innerHTML = `${name}, obrigada por estar conosco por ${years} ${yearsText(years)}. Seu novo salário será de R$${newWageValue.toFixed(2).replace('.',',')}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    clearData();
});