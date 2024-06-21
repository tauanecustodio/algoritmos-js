const textArea = document.getElementById('text-area');

document.getElementById('calc-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 6;
    let soma = 0;
    while (number <= 100) {
        soma += number;
        number++;
    }
    textArea.innerHTML = `Total: ${soma}`;
})