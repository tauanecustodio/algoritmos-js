const textArea = document.getElementById('text-area');

function onlyLetter(text) {
    return /^[a-zA-Z\s]+$/.test(text);
};

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;

    if (!onlyLetter(name)) {
        textArea.innerHTML = "Insira um nome válido";
        return;
    };

    textArea.innerHTML = name + ", é um prazer te conhecer!";
});