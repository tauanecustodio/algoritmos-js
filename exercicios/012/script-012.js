document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const price = parseFloat(document.getElementById('price').value);
    const discount = (price * (5 / 100)).toFixed(2);
    const newPrice = (price - discount).toFixed(2);

    document.getElementById('text-area').innerHTML = `O seu desconto foi de R$${discount.replace('.',',')}<br>
    Você pagará apenas R$${newPrice.replace('.',',')}<br>
    Parabéns!`;
})