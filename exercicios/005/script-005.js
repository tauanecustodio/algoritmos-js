const textResult = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);

    const totalAverage = (value1 + value2)/2;

    textResult.innerHTML = "A média entre " + value1 + " e " + value2 + " é igual a " + totalAverage;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('value1').value = "";
    document.getElementById('value2').value = "";
    textResult.innerHTML = "";
});