const textResult = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    const totalSum = value1 + value2;

    textResult.innerHTML = "A soma entre " + value1 + " e " + value2 + " é igual a " + totalSum;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('value1').value = "";
    document.getElementById('value2').value = "";
    textResult.innerHTML = "";
});