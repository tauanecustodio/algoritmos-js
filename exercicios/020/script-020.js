document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const number = parseFloat(document.getElementById('number').value);
    if (isNaN(number)) {
        document.getElementById('text-area').innerHTML = "Digite um n"
    }

    const modulus = number % 2;
    const numberIs = modulus == 0 ? "par" : "ímpar";
    
    document.getElementById('text-area').innerHTML = `${number} é ${numberIs}`;
});