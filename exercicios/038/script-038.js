const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let number = 6;
    while (number <= 11) {
        textArea.innerHTML += number + "<br>";
        number++;
    }
    textArea.innerHTML += "Acabou! <br>";
});