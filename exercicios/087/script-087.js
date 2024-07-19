const textArea = document.getElementById('text-area');

function gerador(msg) {
    textArea.innerHTML = `+-------=======------+<br>${msg}<br>+-------=======------+`;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const msg = document.getElementById('msg').value;

    if (msg === '') {
        textArea.innerHTML = "Digite uma mensagem!";
        return;
    }

    gerador(msg);
})