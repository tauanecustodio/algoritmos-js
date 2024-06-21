const textArea = document.getElementById('text-area');

// e atribuir a algum dos requisitos
// concatenar os números sorteados

// exebir o total de todos

function drawFunction() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}

document.getElementById('init-btn').addEventListener('click', function(e) {
    e.preventDefault();
    textArea.innerHTML = "";

    let numbersDrawText = "";
    let maiorQue5Text = "";
    let DivisivelPor3Text = "";
    let contador = 0;
    while (contador < 20) {
        let drawValue = drawFunction();
        numbersDrawText += drawValue + " ";
        contador++;
        if (drawValue > 5) {
            maiorQue5Text += drawValue + " ";
        }
        if (drawValue % 3 === 0) {
            DivisivelPor3Text += drawValue + " ";
        }
    }

    textArea.innerHTML = `Números sorteados:<br> ${numbersDrawText}<br>Acima de 5:<br> ${maiorQue5Text}<br>Divisíveis por 3:<br> ${DivisivelPor3Text}`;
})