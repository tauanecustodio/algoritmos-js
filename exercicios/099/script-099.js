const textArea = document.getElementById('text-area');

function calcPotencia(base, expoente) {
    return base ** expoente;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    let base = parseInt(document.getElementById('base').value);
    let expoente = parseInt(document.getElementById('expoente').value);

    if (isNaN(base) || isNaN(expoente)) {
        textArea.innerHTML = "Por favor, insira valores numéricos.";
        return;
    }

    textArea.innerHTML = `${base}<sup>${expoente}</sup>: ${calcPotencia(base, expoente)}`;
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('base').value = '';
    document.getElementById('expoente').value = '';

    textArea.innerHTML = '';
})