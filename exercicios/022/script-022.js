const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const birthYear = parseInt(document.getElementById('year').value);

    if (isNaN(birthYear)) {
        textArea.innerHTML = "Insira um ano válido";
        return;
    }

    const atualYear = new Date().getFullYear();
    const age = atualYear - birthYear;

    if (age < 18) {
        if (18 - age === 1) {
            textArea.innerHTML = `Ainda falta ${18 - age} ano para seu alistamento`;
        } else {
            textArea.innerHTML = `Ainda faltam ${18 - age} anos para seu alistamento`;
        };
    } else {
        if (age - 18 === 1) {
            textArea.innerHTML = `Já se passou ${age - 18} ano do seu alistamento`;
        } else {
            textArea.innerHTML = `Já se passaram ${age - 18} anos do seu alistamento`;
        };
    };
});