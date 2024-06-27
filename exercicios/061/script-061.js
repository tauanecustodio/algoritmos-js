const textArea = document.getElementById('text-area');

document.getElementById('contar').addEventListener('click', function (e) {
    e.preventDefault();

    let contagem = "";

    for (var i = 0; i <= 30; i+=3) {
        contagem += i + ", ";
    }
    textArea.innerHTML = contagem + " acabou!";
})