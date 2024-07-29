const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalPerson = 0;
let totalWoman = 0;
let menOverHundredKg = 0;
let sunWeightWoman = 0;
let greaterWeightMen = 0;

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson >= 8) {
        return;
    }
    
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || weight < 0) {
        textArea.innerHTML = 'Informe um peso válido';
        return;
    } else if (gender === '') {
        textArea.innerHTML = 'Selecione o sexo da pessoa que deseja cadastrar';
        return;
    }

    textArea.innerHTML = '';

    totalPerson++;
    textTotalPerson.innerHTML = `(${totalPerson})`;

    if (gender === 'masculine') {
        if (weight > 100) {
            menOverHundredKg++;
        }
        if (weight > greaterWeightMen) {
            greaterWeightMen = weight;
        }
    } else if (gender === 'feminine') {
        totalWoman++;
        sunWeightWoman += weight;
    }
    
    document.getElementById('weight').value = '';
    document.getElementById('gender').value = '';

    if (totalPerson === 8) {
        textTotalPerson.innerHTML = `(${0})`;

        const averageWomanWeight = totalWoman != 0 ? sunWeightWoman / totalWoman : 0;
        
        textArea.innerHTML = `Total de mulheres: ${totalWoman}<br>Homens com mais de 100kg: ${menOverHundredKg}<br>Média de pesos das mulheres: ${averageWomanWeight}<br>Maior peso dos homens: ${greaterWeightMen}`;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    textTotalPerson.innerHTML = '(0)';

    document.getElementById('weight').value = '';
    document.getElementById('gender').value = ''

    totalPerson = 0;
    totalWoman = 0;
    menOverHundredKg = 0;
    sunWeightWoman = 0;
    greaterWeightMen = 0;
})