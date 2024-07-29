const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalPerson = 0;
const names = [];
const genders = [];
const wages = [];

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson >= 5) {
        return;
    }
    
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const wage = parseFloat(document.getElementById('wage').value);

    if (name === '') {
        textArea.innerHTML = 'Informe o nome da pessoa que deseja cadastrar';
        return;
    } else if (gender === '') {
        textArea.innerHTML = 'Selecione o gênero válido';
        return;
    } else if (isNaN(wage) || wage < 0) {
        textArea.innerHTML = 'Informe um salário válido';
        return;
    }

    textArea.innerHTML = '';

    totalPerson++;
    textTotalPerson.innerHTML = `(${totalPerson})`;

    names.push(name);
    wages.push(wage);
    genders.push(gender);
    
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('wage').value = '';

    if (totalPerson === 5) {
        console.log(names);
        console.log(wages);
        console.log(genders);

        const filterWomanWageOver5000 = [];
        for(let i = 0; i < names.length; i++) {
            if (genders[i] === 'feminine' && wages[i] >= 5000) {
                filterWomanWageOver5000.push(`${names[i]} (${wages[i]})`);
            }
        }
        
        textArea.innerHTML = `${filterWomanWageOver5000.join('<br>')}`;

        names.length = 0;
        wages.length = 0;
        genders.length = 0;
        totalPerson = 0;
        textTotalPerson.innerHTML = `(${totalPerson})`;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    textTotalPerson.innerHTML = '(0)';

    document.getElementById('name').value = '';
    document.getElementById('gender').value = ''
    document.getElementById('wage').value = '';

    totalPerson = 0;

    names.length = 0;
    genders.length = 0;
    wages.length = 0;
})