const textArea = document.getElementById('text-area');
const amountTermsFibonacci = document.getElementById('amount');
const generateBtn = document.querySelector('button[type="submit"]');

function fibonacci(n) {
    let fibonacciSequence = [];
    let a = 1;
    let b = 1;

    if (n >= 1) fibonacciSequence.push(a);
    if (n >= 2) fibonacciSequence.push(b);

    for (let i = 3; i <= n; i++) {
        let nextTerm = a + b;
        fibonacciSequence.push(nextTerm);
        a = b;
        b = nextTerm;
    }

    textArea.innerHTML = fibonacciSequence.join(' >> ') + ' >> FIM';
}

generateBtn.addEventListener('click', function(e) {
    e.preventDefault();

    n = parseInt(amountTermsFibonacci.value);

    if (n <= 0 || isNaN(n)) {
        textArea.innerHTML = "Informe um número inteiro maior que zero";
        return;
    }

    fibonacci(n);
    amountTermsFibonacci.value = '';
});