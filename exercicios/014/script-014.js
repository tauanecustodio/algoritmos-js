document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const kmValue = parseFloat(document.getElementById('km-value').value);
    const daysValue = parseFloat(document.getElementById('days-value').value);

    console.log (kmValue);
    console.log (daysValue);

    const totalPrice = (kmValue * 0.20) + (daysValue * 90);

    document.getElementById('text-area').innerHTML = `O total a pagar é R$${totalPrice.toFixed(2).replace('.',',')}`;
})