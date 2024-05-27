document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const reais = document.getElementById('reais').value;
    // valor do dolar hoje (26.05.2024): R$5,17
    const dolar = (reais / 5.17).toFixed(2)

    document.getElementById('text-area').innerHTML = `${dolar}US$`
})