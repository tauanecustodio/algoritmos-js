const textArea = document.getElementById('text-area');
const totalAgesText = document.getElementById('total-ages-add');

const ageList = [];
let totalAges = 0;

function averageAges(ages) {
    const sum = ages.reduce((a, b) => a + b, 0);
    return sum / ages.length;
}

function over25YearsOld(ages) {
    const over25 = [];
    for(let i = 0; i <= ages.length; i++) {
        if (ages[i] > 25) {
            over25.push(`${ages[i]}(${i})`);
        }
    }

    if (over25.length == 0) {
        return 'Nenhuma idade maior que 25.';
    } 
    return over25.join(', ');
} 

function oldestAge(ages) {
    let oldestAge = 0;
    const oldestAgeArr = [];
    for(let i = 0; i <= ages.length; i++) {
        if (ages[i] > oldestAge) {
            oldestAgeArr.length = 0;
            oldestAge = ages[i];
            oldestAgeArr.push(`${ages[i]}(${i})`);
        } else if (ages[i] === oldestAge) {
            oldestAgeArr.push(`${ages[i]}(${i})`);
        } 
    }
    return oldestAgeArr.join(', ');
}

document.querySelector('button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault();

    if (totalAges > 8) {
        totalAgesText.innerHTML = 1;
        return;
    }

    let age = parseInt(document.getElementById('age').value);

    if (isNaN(age)) {
        textArea.innerHTML = "Insira uma idade válida."
        return;
    }

    ageList.push(age);

    totalAges++;
    totalAgesText.innerHTML = totalAges;
    textArea.innerHTML = '';
    document.getElementById('age').value = '';

    if (totalAges >= 8) {
        totalAges = 0;
        totalAgesText.innerHTML = 0;

        textArea.innerHTML = `Idades adicionadas: ${ageList.join(', ')}<br>Média das idades: ${averageAges(ageList).toFixed(1)}<br>Pessoas com mais de 25 anos: ${over25YearsOld(ageList)}<br>Maior idade: ${oldestAge(ageList)}`;

        ageList.length = 0;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function (e) {
    e.preventDefault();

    textArea.innerHTML = '';
    ageList.length = 0;
    totalAges = 0;
    totalAgesText.innerHTML = totalAges;
    document.getElementById('age').value = '';
})