const textArea = document.getElementById('text-area');

function gerador(msg, number, border) {
    let borderStyle = ` `;
    if (border === 1) {
        borderStyle = `+-------=======------+<br>`;
    } else if (border === 2) {
        borderStyle = `~~~~~~~~:::::::~~~~~~~<br>`;
    } else if (border === 3) {
        borderStyle = `<<<<<<<<------->>>>>>><br>`;
    }
    const repeatMsg = `${msg} <br>`.repeat(number)
    textArea.innerHTML = borderStyle + repeatMsg + borderStyle;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const msg = document.getElementById('msg').value;
    const number = parseInt(document.getElementById('number').value);
    const border = parseInt(document.getElementById('border').value);

    if (msg === '') {
        textArea.innerHTML = "Digite uma mensagem!";
        return;
    }

    gerador(msg, number, border);
})