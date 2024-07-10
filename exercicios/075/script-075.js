const textArea = document.getElementById('text-area');

function fibonacciSequence(n) {
    const fibonacci = [];
    
    for(let i = 0; i <= n; i++) {
        if (i == 0) {
            fibonacci.push(0);
        } else if (i == 1 || i == 2) {
            fibonacci.push(1);
        } else {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        }
    }

    return fibonacci.join(', ');
}

textArea.innerHTML = fibonacciSequence(16);