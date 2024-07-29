const textArea = document.getElementById('text-area');

function mediaCalc(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)) {
        textArea.innerHTML = "Insira valores numéricos válidos";
        return;
    }

    textArea.innerHTML = `Resultado: ${mediaCalc(nota1, nota2)}`;
})