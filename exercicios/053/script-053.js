const textArea = document.getElementById('text-area');
const textContador = document.getElementById('text-contador');
let genero;
let idade = 0;
let contador = 0;

let homens = 0;
let mulheres = 0;
let somaIdades = 0;
let mediaIdades = 0;
let somaIdadeMasculina = 0;
let mediaIdadeMasculina = 0;
let mulherMaior20 = 0;

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    genero = document.getElementById('gender').value;
    idade = parseInt(document.getElementById('age').value);
    
    if (genero == '' || isNaN(idade)) {
        return;
    } else if (genero ==='masculino') {
        homens++;
        somaIdadeMasculina += idade;
        mediaIdadeMasculina = somaIdadeMasculina / homens;
    } else if (genero === 'feminino') {
        mulheres++;
    }
    
    somaIdades += idade;
    mediaIdades = somaIdades / 5;
    
    if (genero === 'feminino' && idade > 20) {
        mulherMaior20++;
    }
    
    contador++
    textContador.textContent = contador < 5 ? (contador + 1) : 1;
    
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';

    if (contador > 4) {
        textArea.innerHTML = `Homens: ${homens} <br>Mulheres: ${mulheres} <br>Média das idades: ${mediaIdades.toFixed(2)} <br>Média das idades masculinas: ${mediaIdadeMasculina.toFixed(2)} <br>Mulheres com +20 anos: ${mulherMaior20}`;
    } else {
        return;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
    textArea.innerHTML = '';
    textContador.innerHTML = 1;
    idade = 0;
    contador = 0;

    mulheres = 0;
    homens = 0;
    somaIdades = 0;
    mediaIdades = 0;
    somaIdadeMasculina = 0;
    mediaIdadeMasculina = 0;
    mulherMaior20 = 0;
})