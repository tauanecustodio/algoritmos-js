const textArea = document.getElementById('text-area');
const totalNotasText = document.getElementById('total-notas-add');

const notas = [];
let totalNotas = 0;

function averageNotas(notas) {
    const sum = notas.reduce((a, b) => a + b, 0);
    return sum / notas.length;
}

function notasOverAverage(notas) {
    const average = averageNotas(notas);
    let overAverage = 0;
    for(let i = 0; i <= notas.length; i++) {
        if (notas[i] > average) {
            overAverage++
        }
    }
    return overAverage;
} 

function highestNota(notas) {
    let highestNota = 0;
    const highestNotaArr = [];
    for(let i = 0; i <= notas.length; i++) {
        if (notas[i] > highestNota) {
            highestNotaArr.length = 0;
            highestNota = notas[i];
            highestNotaArr.push(`${notas[i]}(${i})`);
        } else if (notas[i] === highestNota) {
            highestNotaArr.push(`${notas[i]}(${i})`);
        } 
    }
    return highestNotaArr.join(', ');
}

document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault();

    if (totalNotas > 10) {
        totalNotasText.innerHTML = 1;
        return;
    }

    let nota = parseFloat(document.getElementById('nota').value);

    if (isNaN(nota)) {
        textArea.innerHTML = "Insira uma nota válida."
        return;
    }

    notas.push(nota);

    totalNotas++;
    totalNotasText.innerHTML = totalNotas;
    textArea.innerHTML = '';
    document.getElementById('nota').value = '';

    if (totalNotas >= 10) {
        totalNotas = 0;
        totalNotasText.innerHTML = 0;

        textArea.innerHTML = `Notas adicionadas: ${notas.join(', ')}<br>Média da turma: ${averageNotas(notas).toFixed(1)}<br>Alunos acima da média: ${notasOverAverage(notas)}<br>Maior nota: ${highestNota(notas)}`;

        notas.length = 0;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function (e) {
    e.preventDefault();

    textArea.innerHTML = '';
    notas.length = 0;
    totalNotas = 0;
    totalNotasText.innerHTML = totalNotas;
    document.getElementById('nota').value = '';
})