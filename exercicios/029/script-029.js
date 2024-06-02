let textArea = document.getElementById('text-area');

function newWage(wage, workYears) {
    if (workYears > 10) {
        return wage *20 / 100;
    } else if (workYears >= 3) {
        return wage * 12.5 / 100;
    } else {
        return wage * 3 / 100;
    }
};

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const wage = parseFloat(document.getElementById('wage').value);
    const workYears = parseInt(document.getElementById('work-years').value);
    
    const newWageValue = newWage(wage, workYears) + wage;

    if (!isNaN(name)) {
        textArea.innerHTML = "Insira um nome válido";
        return;
    } else if (isNaN(wage)) {
        textArea.innerHTML = "Insira um salário válido";
        return;
    } else if (isNaN(workYears)) {
        textArea.innerHTML = "Insira um tempo de trabalho válido";
        return;
    } else {
        textArea.innerHTML = `Seu novo salário será ${newWageValue}`;
    };
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('name').value = '';
    document.getElementById('wage').value = '';
    document.getElementById('work-years').value = '';

    textArea.innerHTML = '';
});