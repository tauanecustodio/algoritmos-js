document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const valueCigarrette = document.getElementById('value-cigarrette').value;
    const valueYears = document.getElementById('value-years').value;

    const lostDays = (valueYears * 365 * valueCigarrette * 10) / 1440

    document.getElementById('text-area').innerHTML = `Você perdeu aproximadamente ${lostDays.toFixed()} dias de vida.`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('value-cigarrette').value = "";
    document.getElementById('value-years').value = "";
    document.getElementById('text-area').innerHTML = "";
});