const textArea = document.getElementById('text-area');

function gerador(msg, number) {
    const border = `+-------=======------+<br>`;
    const repeatMsg = `${msg} <br>`.repeat(number)
    textArea.innerHTML = border + repeatMsg + border;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const msg = document.getElementById('msg').value;
    const number = parseInt(document.getElementById('number').value);

    if (msg === '') {
        textArea.innerHTML = "Digite uma mensagem!";
        return;
    }

    gerador(msg, number);
})