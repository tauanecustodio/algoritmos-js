const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const numberLimit = parseInt(document.getElementById('number').value);

    if (numberLimit < 0) {
        textArea.innerHTML = "Insira um número positivo";
        return;
    } else if (numberLimit > 1000) {
        textArea.innerHTML = "Insira um número menor que 1000";
        return;
    } else if (!numberLimit) {
        textArea.innerHTML = "Digite um número";
        return;
    }

    textArea.innerHTML = "";
    let numberInit = 1;
    while (numberInit <= numberLimit) {
        textArea.innerHTML += numberInit + ", ";
        numberInit++;
    }

    textArea.innerHTML += "Fim";
})