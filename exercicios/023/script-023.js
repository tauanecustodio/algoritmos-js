const textArea = document.getElementById('text-area');

function discount(price, gender) {
    if (gender === 'feminino') {
        return price * 13 / 100;
    } else {
        return price * 5 / 100;
    };
};

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const price = parseFloat(document.getElementById('price').value);

    if (!name) {
        textArea.innerHTML = "Insira um nome válido";
        return;
    } else if (!gender) {
        textArea.innerHTML = "Selecione seu gênero";
        return;
    } else if (isNaN(price)) {
        textArea.innerHTML = "Insira um preço válido";
        return;
    };
    
    const discountValue = discount(price, gender);
    const totalPrice = price - discountValue;

    textArea.innerHTML = `Olá, ${name}, obrigada por comprar conosco!<br>Seu desconto foi de R$${discountValue.toFixed(2).replace('.',',')} <br>Total: R$${totalPrice.toFixed(2).replace('.',',')}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('name').value = "";
    document.getElementById('gender').value = "";
    document.getElementById('price').value = "";
    textArea.innerHTML = "";
});