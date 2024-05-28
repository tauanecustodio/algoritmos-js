document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const wage = parseFloat(document.getElementById('wage').value);
    const increase = wage * (15 / 100);
    const newWage = wage + increase;

    document.getElementById('text-area').innerHTML = `Seu aumento será de R$${increase.toFixed(2).replace('.',',')} e seu salário passará a ser de R$${newWage.toFixed(2).replace('.',',')}`;
})