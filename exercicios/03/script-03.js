const textArea = document.getElementById('text-area');

function onlyLetter(text) {
    return /^[a-zA-Z\s]+$/.test(text);
};

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const wage = parseFloat(document.getElementById('wage').value);
    const atualDate = new Date();

    if (!onlyLetter(name)) {
        textArea.innerHTML = "Insira um nome válido";
        return
    } else if (isNaN(wage)) {
        textArea.innerHTML = "Insira um salário válido";
        return
    };
    
    textArea.innerHTML = "O(a) funcionário(a) " + name + " tem um salário de R$" + wage + " em " + atualDate.toLocaleDateString();
})