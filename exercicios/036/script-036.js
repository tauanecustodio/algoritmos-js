// declarações
const textArea = document.getElementById('text-area');

// funções
function points(hours) {
    if (hours <= 10) {
        return hours * 2;
    } else if (hours <= 20) {
        return hours * 5;
    } else {
        return hours * 10;
    }
}

function money(points) {
    return points * 0.05;
}

function hoursValidation(hoursActivity) {
    if (isNaN(hoursActivity) || hoursActivity < 0) {
        return "Digite um número de horas válidas"
    };
    return null;
}

// eventos
document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const hoursActivity = parseInt(document.getElementById('activity-hours').value);
    
    const validationMessage = hoursValidation(hours);
    if (validationMessage) {
        textArea.innerHTML = validationMessage;
        return;
    };
    
    const totalPoints = points(hoursActivity);
    const totalMoney = money(totalPoints);

    textArea.innerHTML = `O total de pontos acumulados foi ${totalPoints} e você poderá trocar por R$${totalMoney.toFixed(2).replace('.',',')}`;
})