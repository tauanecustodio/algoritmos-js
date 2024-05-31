let textArea = document.getElementById('text-area');

function classificationFunction(area) {
    if (area >= 500) {
        return 'VIP';
    } else if (area >= 100) {
        return 'MASTER';
    } else {
        return 'POPULAR';
    }
};

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(width) || isNaN(length)) {
        textArea.innerHTML = 'Insira dois valores válidos';
        return;
    };

    const area = width * length;
    let classification = classificationFunction(area);

    textArea.innerHTML = `Área do terreno: ${area}m²<br>Classificação: TERRENO ${classification}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('width').value = "";
    document.getElementById('length').value = "";
    textArea.innerHTML = "";
});