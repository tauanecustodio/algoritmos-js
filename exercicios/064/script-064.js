const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    for(let i = 0; i <= 40; i += 5) {
        textArea.innerHTML += i + ", ";
    }
    textArea.innerHTML += "acabou!"
})