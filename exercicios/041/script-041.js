const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 100;
    while (number >= 0) {
        textArea.innerHTML += number + ", ";
        number = number - 5;
    }

    textArea.innerHTML += "Acabou! <br>";
});