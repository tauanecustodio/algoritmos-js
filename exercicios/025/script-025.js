const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);

    if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB) {
        textArea.innerHTML = "É possível formar um triângulo";
    } else {
        textArea.innerHTML = "Não é possível formar um triângulo";
    }
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('ladoA').value = "";
    document.getElementById('ladoB').value = "";
    document.getElementById('ladoC').value = "";
    textArea.innerHTML = "";
});