const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 30;
    while (number >= 1) {
        if (number % 4 === 0) {
            textArea.innerHTML += `[${number}], `;
        } else {
            textArea.innerHTML += `${number}, `;
        }
        number--;
    }
    textArea.innerHTML += "Acabou! <br>";
});