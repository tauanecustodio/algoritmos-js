const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalPerson = 0;
let olderAge = 0;
let totalMasculine = 0;
let sunAgeMasculine = 0;
let averageAgeMasculine = 0;
let ageYoungerWoman = 0;

document.getElementById('adicionar').addEventListener('click', function(e) {
    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);

    if (gender === '') {
        textArea.innerHTML = 'Informe o sexo da pessoa que deseja cadastrar';
        return;
    } else if (isNaN(age) || age < 0) {
        textArea.innerHTML = 'Informe uma idade válida';
        return;
    }

    textArea.innerHTML = '';

    totalPerson++;
    textTotalPerson.innerHTML = `(${totalPerson})`;

    if (olderAge < age) {
        olderAge = age;
    }

    if (gender === 'masculine') {
        totalMasculine++;
        sunAgeMasculine += age;
    } else if (gender === 'feminine') {
        if (ageYoungerWoman === 0 || age < ageYoungerWoman) {
            ageYoungerWoman = age;
        }
    }

    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
})

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson <= 0) {
        textArea.innerHTML = 'Nenhuma pessoa cadastrada.';
        return;
    }


    averageAgeMasculine = totalMasculine > 0 ? (sunAgeMasculine / totalMasculine) : 'não foi informado dados de homens';

    ageYoungerWoman = ageYoungerWoman <= 0 ? 'não foi informado dados de mulheres': ageYoungerWoman;

    textArea.innerHTML = `Maior idade lida: ${olderAge}<br>Homens cadastrados: ${totalMasculine}<br>Mulher mais jovem: ${ageYoungerWoman}<br>Média de idade masculina: ${averageAgeMasculine}`;
})
    

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    textTotalPerson.innerHTML = '(0)';

    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';

    totalPerson = 0;
    olderAge = 0;
    totalMasculine = 0;
    sunAgeMasculine = 0;
    averageAgeMasculine = 0;
    ageYoungerWoman = 0;
})