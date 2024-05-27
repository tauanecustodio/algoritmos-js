document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const daysWork = parseInt(document.getElementById('days-work').value);
    const wage = daysWork * 8 * 25;

    document.getElementById('text-area').innerHTML = `Seu salário esse mês será: R$${wage}`;
})