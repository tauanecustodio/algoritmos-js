let textArea = document.getElementById('text-area');

function dataValidation(loan, wage, years) {
    if (isNaN(loan)) {
        return "Informe o valor do empréstimo desejado";
    } else if (isNaN(wage)) {
        return "Informe seu salário";
    } else if (isNaN(years)) {
        return "Informe em quantos anos deseja";
    };
    return null;
};

function analyzesLoan(loan, wage, years) {
    const valueInstallment = loan / (years * 12);
    const valueAllowed = wage * 30 / 100;

    if (valueInstallment > valueAllowed) {
        return `Empréstimo não pode ser concedido, pois, ultrapassa o valor permitido para as parcelas (até 30% do seu salário)`;
    } else {
        return `Empréstimo concedido, as parcelas serão de R$${valueInstallment.toFixed(2).replace('.',',')}`;
    };
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const valueLoan = parseFloat(document.getElementById('value-loan').value);
    const valueWage = parseFloat(document.getElementById('value-wage').value);
    const valueYears = parseFloat(document.getElementById('value-years').value);

    if (dataValidation(valueLoan, valueWage, valueYears) != null) {
        textArea.innerHTML = dataValidation(valueLoan, valueWage, valueYears);
        return;
    }

    textArea.innerHTML = analyzesLoan(valueLoan, valueWage, valueYears);
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('value-loan').value = "";
    document.getElementById('value-wage').value = "";
    document.getElementById('value-years').value = "";
    textArea.innerHTML = "";
});