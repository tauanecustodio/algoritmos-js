const textArea = document.getElementById('text-area');

function contador(start, end, increment) {
    const contadorArr = [];
    for(let i = start; i <= end; i += increment) {
        contadorArr.push(i);
    }

    textArea.innerHTML = contadorArr.join(', ')
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    let numberStart = parseInt(document.getElementById('number-start').value);
    let numberEnd = parseInt(document.getElementById('number-end').value);
    let increment = parseInt(document.getElementById('increment').value);

    if (isNaN(numberStart) || isNaN(numberEnd) || isNaN(increment)) {
        textArea.innerHTML = "Informe números válidos";
        return;
    }

    contador(numberStart, numberEnd, increment);
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('number-start').value = "";
    document.getElementById('number-end').value = "";
    document.getElementById('increment').value = "";
    textArea.innerHTML = "";
})