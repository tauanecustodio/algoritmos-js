const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    const number = parseInt(document.getElementById('number').value);

    const predecessor = number - 1;
    const successor = number + 1;

    textArea.innerHTML = "O antecessor de " + number + " é " + predecessor + "<br>O sucessor de " + number + " é " + successor;
});

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.getElementById('number').value = "";
    textArea.innerHTML = "";
})