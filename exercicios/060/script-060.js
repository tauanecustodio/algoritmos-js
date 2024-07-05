const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalPerson = 0;
let olderAge = 0;
let olderPerson;
let youngerWoman;
let ageYoungerWoman = 0;
let sunAge = 0;
let manOverThirty = 0;
let womenUnderEighteen = 0;

document.getElementById('adicionar').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (!name || !isNaN(name)) {
        textArea.innerHTML = 'Informe o nome da pessoa que deseja cadastrar';
        return;
    } else if (isNaN(age) || age < 0) {
        textArea.innerHTML = 'Informe uma idade válida';
        return;
    } else if (gender === '') {
        textArea.innerHTML = 'Informe o sexo da pessoa que deseja cadastrar';
        return;
    }

    textArea.innerHTML = '';

    totalPerson++;
    sunAge += age;
    textTotalPerson.innerHTML = `(${totalPerson})`;

    if (olderAge < age) {
        olderAge = age;
        olderPerson = name;
    }

    if (gender === 'masculine') {
        if (age > 30) {
            manOverThirty++;
        }
    } else if (gender === 'feminine') {
        if (ageYoungerWoman === 0 || age < ageYoungerWoman) {
            ageYoungerWoman = age;
            youngerWoman = name;
        }

        if (age < 18) {
            womenUnderEighteen++;
        }
    }

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
})

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson <= 0) {
        textArea.innerHTML = 'Nenhuma pessoa cadastrada.';
        return;
    }

    const averageAge = sunAge / totalPerson;

    youngerWoman = ageYoungerWoman <= 0 ? 'não foi informado dados de mulheres': youngerWoman;

    textArea.innerHTML = `Pessoa mais velha: ${olderPerson} (${olderAge} anos)<br>Mulher mais jovem: ${youngerWoman} (${ageYoungerWoman} anos)<br>Média de idades: ${averageAge.toFixed(2).replace('.',',')}<br>Homens com mais de 30 anos: ${manOverThirty}<br>Mulheres com menos de 18 anos: ${womenUnderEighteen}`;
})
    

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    textTotalPerson.innerHTML = '(0)';

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';

    totalPerson = 0;
    olderPerson = '';
    youngerWoman = '';
    ageYoungerWoman = 0;
    sunAge = 0;
    averageAge = 0;
    manOverThirty = 0;
    womenUnderEighteen = 0;
    olderAge = 0;
})