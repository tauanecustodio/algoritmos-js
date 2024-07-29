const textArea = document.getElementById('text-area');
const textTotalPerson = document.getElementById('total-person');

let totalPerson = 0;
const names = [];
const ages = [];

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson >= 9) {
        return;
    }
    
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    if (name === '') {
        textArea.innerHTML = 'Informe o nome da pessoa que deseja cadastrar';
        return;
    } else if (isNaN(age) || age < 0) {
        textArea.innerHTML = 'Informe uma idade válida';
        return;
    }

    textArea.innerHTML = '';

    totalPerson++;
    textTotalPerson.innerHTML = `(${totalPerson})`;

    names.push(name);
    ages.push(age);
    
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';

    if (totalPerson === 9) {
        textTotalPerson.innerHTML = `(${0})`;
        
        const peopleOver18 = [];
        for(let i = 0; i < ages.length; i++) {
            if (ages[i] >= 18) {
                peopleOver18.push(`${names[i]} (${ages[i]})`);
            }
        }
        textArea.innerHTML = `${peopleOver18.join('<br>')}`;
        names.length = 0;
        ages.length = 0;
        totalPerson = 0;
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    textTotalPerson.innerHTML = '(0)';

    document.getElementById('name').value = '';
    document.getElementById('age').value = ''

    totalPerson = 0;

    names.length = 0;
    ages.length = 0;
})