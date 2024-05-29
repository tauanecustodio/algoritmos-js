document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const year = parseInt(document.getElementById('year').value);
    if (isNaN(year)) {
        document.getElementById('text-area').innerHTML = "Insira um ano válido";
        return;
    }

    const bissextoCalc = year % 4;
    const bissextoIs = bissextoCalc == 0 ? "é bissexto" : "não é bissexto";
    
    document.getElementById('text-area').innerHTML = `O ano ${year} ${bissextoIs}`;
});