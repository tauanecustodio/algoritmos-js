const textArea = document.getElementById('text-area');
const totalPersonText = document.getElementById('total-person')
let totalPerson = 0;
const arrNames = [];

document.getElementById('add').addEventListener('click', function(e) {
    e.preventDefault();

    if (totalPerson >= 7) {
        totalPersonText.innerHTML = `(0)`
        return;
    }

    let name = document.getElementById('name').value;
    if(name === '') {
        textArea.innerHTML = 'Por favor, preencha o nome.';
        return;
    }

    totalPerson++;
    totalPersonText.innerHTML = `(${totalPerson})`
    arrNames.push(name);
    
    if (totalPerson === 7) {
        console.log(arrNames);
        textArea.innerHTML = `Nomes adicionados: ${arrNames.reverse().join(', ')}`
    }
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    textArea.innerHTML = '';
    document.getElementById('name').value = '';
    totalPerson = 0;
    totalPersonText.innerHTML = `(${totalPerson})`
    arrNames.length = 0;
    console.log(arrNames);
})