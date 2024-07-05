const textArea = document.getElementById('text-area');

document.getElementById('contador-btn').addEventListener('click', function(e) {
    e.preventDefault();

    for(let i = 100; i >= 0; i-= 10) {
        textArea.innerHTML += i + ", ";
    }
    textArea.innerHTML += "acabou!";
})