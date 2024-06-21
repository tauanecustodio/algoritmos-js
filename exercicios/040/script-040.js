const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 0;
    while (number <= 18) {
        textArea.innerHTML += number + ", ";
        number = number + 3;
    }

    textArea.innerHTML += "Acabou! <br>";
});