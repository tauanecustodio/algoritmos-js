const textArea = document.getElementById('text-area');
let situation;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const birthYear = parseInt(document.getElementById('birth-year').value);
    const date = new Date;
    const atualYear = date.getFullYear();
    const age = atualYear - birthYear;

    if (age >=0 && age < 16) {
        situation = "Você ainda não pode votar";
    } else if (age == 16 && age == 17) {
        situation = "Você ainda é menor de idade, mas, se desejar, pode votar";
    } else if (age >=18 && age <= 70) {
        situation = "Seu voto é essencial e obrigatório";
    } else if (age > 70) {
        situation = "Você já pode escolher se deseja ou não votar";
    } else if (age < 0) {
        textArea.innerHTML = `Digite um ano válido`;
        return;
    }

    textArea.innerHTML = `IDADE: ${age} anos <br>${situation}`
});