const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    const media = (nota1 + nota2) / 2;
    const aproveitamento = media >= 7 ? "Bom aproveitamento" : "Aproveitamento abaixo da média";

    textArea.innerHTML = `Média: ${media} <br>Aproveitamento: ${aproveitamento}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    textArea.innerHTML = "";
});