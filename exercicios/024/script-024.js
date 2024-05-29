let textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    if (isNaN(distance)) {
        textArea.innerHTML = 'Insira um valor válido';
        return;
    }

    let price;

    if (distance <= 200) {
        price = distance * 0.5;
    } else {
        price = distance * 0.45;
    }

    textArea.innerHTML = `Sua passagem custará R$${price.toFixed(2).replace('.',',')}`;
})