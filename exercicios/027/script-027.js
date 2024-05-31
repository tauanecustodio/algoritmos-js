const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    if (isNaN(value1) || isNaN(value2)) {
        textArea.innerHTML = 'Insira duas notas válidas';
        return;
    }

    const totalAverage = (value1 + value2)/2;
    let aproveitamento;

    if (totalAverage >= 7) {
        aproveitamento = "Aprovado";
    } else if (totalAverage >= 5) {
        aproveitamento = "Recuperação";
    } else {
        aproveitamento = "Reprovado";
    }

    textArea.innerHTML = `MÉDIA: ${totalAverage} <br>APROVEITAMENTO: ${aproveitamento}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('value1').value = "";
    document.getElementById('value2').value = "";
    textArea.innerHTML = "";
});