const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
let idade = 0;
let soma = 0;
let maiorDe18 = 0;
let menorDe5 = 0;
let maiorIdade = 0;
let contador = 0;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    idade = parseInt(document.getElementById('idade').value);
    if (isNaN(idade)) {
        return;
    } else if (idade > 18) {
        maiorDe18++;
    } else if (idade < 5) {
        menorDe5++;
    }

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }
    soma += idade;
    let mediaIdades = soma / contador;

    contador++;
    console.log(contador);
    textContador.textContent = contador < 10 ? (contador + 1) : 1;
    
    document.getElementById('idade').value = "";
    if (contador <= 10) {    
        textArea.innerHTML = `Media das idades: ${mediaIdades.toFixed(2)} <br>Pessoas com +18: ${maiorDe18}<br> Pessoas com menos de 5 anos: ${menorDe5} <br>Maior idade: ${maiorIdade}`;
    } else if (contador > 10) {
        return;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('idade').value = "";
    textArea.innerHTML = "";
    textContador.innerHTML = 1;

    idade = 0;
    soma = 0;
    maiorDe18 = 0;
    menorDe5 = 0;
    maiorIdade = 0;

    contador = 0;
})