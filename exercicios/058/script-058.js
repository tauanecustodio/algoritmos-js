const textArea = document.getElementById('text-area');
const textTotalAlunos = document.getElementById('total-alunos');

let nota = 0;
let totalAlunos = 0;
let somaNotas = 0;
let mediaNotas = 0;

document.getElementById('adicionar').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';

    nota = parseFloat(document.getElementById('nota').value);

    if (isNaN(nota) || nota < 0) {
        textArea.innerHTML = 'Informe uma nota válida';
        return;
    } 

    totalAlunos++;
    textTotalAlunos.innerHTML = `(${totalAlunos})`;
    somaNotas += nota;

    document.getElementById('nota').value = '';
})

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalAlunos <= 0) {
        return;
    }

    mediaNotas = somaNotas/totalAlunos;
    textTotalAlunos.innerHTML = `(${0})`;

    textArea.innerHTML = `Total de alunos adicionados: ${totalAlunos} <br>Média da turma: ${mediaNotas.toFixed(2).replace('.',',')}`;
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    textTotalAlunos.innerHTML = `(${0})`;
    document.getElementById('nota').value = '';
    
    totalAlunos = 0;
    somaNotas = 0;
    mediaNotas = 0;
    nota = 0;
})