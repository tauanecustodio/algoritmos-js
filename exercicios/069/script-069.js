const textArea = document.getElementById('text-area');

function clearInputs() {
    document.getElementById('primeiro-termo').value = '';
    document.getElementById('razao').value = '';
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    textArea.innerHTML = '';
    
    const primeiroTermo = parseInt(document.getElementById('primeiro-termo').value);
    const razao = parseInt(document.getElementById('razao').value);

    if (isNaN(primeiroTermo) || isNaN(razao) || razao < 0 || primeiroTermo < 0) {
        textArea.innerHTML = 'Informe valores válidos para os termos da progressão aritmética';
        return;
    }

    let termo = primeiroTermo;
    let sumPA = 0;
    
    for(let i = 0; i < 10; i++) {
        textArea.innerHTML += termo + ', ';
        sumPA += termo;
        termo += razao;
    }
    textArea.innerHTML += 'FIM <br>Soma da PA:'+ sumPA;
    clearInputs();
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    textArea.innerHTML = '';
    clearInputs();
})