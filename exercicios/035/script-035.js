const textArea = document.getElementById('text-area');

function calcAluguel(car, days, km) {
    if (car === 'popular') {
        if (km <= 100) {
            return (90 * days) + (0.2 * km); 
        } else {
            return (90 * days) + (0.1 * km);
        }
    } else {
        if (km <= 200) {
            return (150 * days) + (0.3 * km); 
        } else {
            return (150 * days) + (0.25 * km);
        }
    }
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const carType = document.getElementById('car-type').value;
    const carDays = document.getElementById('car-days').value;
    const carKm = document.getElementById('car-distance').value;

    if (!carType ||!carDays ||!carKm) {
        textArea.innerHTML = 'Preencha todos os campos';
        return;
    }

    textArea.innerText = `O valor a ser pago será: R$${calcAluguel(carType, carDays, carKm)}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('car-type').value = "";
    document.getElementById('car-days').value = "";
    document.getElementById('car-distance').value = "";
    textArea.innerHTML = "";
});