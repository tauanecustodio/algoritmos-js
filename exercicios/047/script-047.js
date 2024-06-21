const textArea = document.getElementById('text-area');

document.getElementById('calc-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 500;
    let soma = 0;

    while (number >= 0) {
        soma += number;
        number -= 50;
    }

    textArea.innerHTML = `Total: ${soma}`;
})