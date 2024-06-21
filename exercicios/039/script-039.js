const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 10;
    while (number >= 3) {
        textArea.innerHTML += number + "<br>";
        number--;
    }

    textArea.innerHTML += "Acabou! <br>";
})