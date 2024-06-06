const textArea = document.getElementById('text-area');

function isTriangleCheck(ladoA, ladoB, ladoC) {
    return (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB);
};

function whatTriangleType(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return "equilátero";
    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        return "escaleno";
    } else {
        return "isósceles";
    };
};

function validateInputs(...inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (isNaN(inputs[i])) {
            return `Informe o ${i+1}° lado`;
        };
    };
    return null;
}

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);

    const errorMessage = validateInputs(ladoA, ladoB, ladoC);
    if (errorMessage!= null) {
        textArea.innerHTML = errorMessage;
        return;
    };

    if ( isTriangleCheck(ladoA, ladoB, ladoC)) {
        textArea.innerHTML = `As medidas informadas formam um triângulo ${whatTriangleType(ladoA, ladoB, ladoC)}`;
    } else {
        textArea.innerHTML = `As medidas informadas não podem formar um triângulo`;
    };
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('ladoA').value = "";
    document.getElementById('ladoB').value = "";
    document.getElementById('ladoC').value = "";
    textArea.innerHTML = "";
});