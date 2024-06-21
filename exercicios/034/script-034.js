// Declarações
const textArea = document.getElementById('text-area');


// Funções
function messageImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso ideal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obesidade';
    } else {
        return 'Obesidade mórbida';
    }
}

function validateInput(weight, height) {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return 'Informe valores válidos para peso e altura';
    }
    return null;
}


// Eventos
document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    const validationMessage = validateInput(weight, height);
    if (validationMessage) {
        textArea.innerHTML = validationMessage;
        return;
    }

    const imcValue = weight / ((height/100)**2);

    textArea.innerHTML = `Seu IMC é: ${imcValue.toFixed(2)} e sua faixa é: ${messageImc(imcValue)}`;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    textArea.innerHTML = "";
});