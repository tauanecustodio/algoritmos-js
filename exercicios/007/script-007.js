document.querySelector('button[type="submit"').addEventListener('click', function(e) {
    e.preventDefault();

    const number = parseFloat(document.getElementById('number').value);

    const double = number * 2;
    const third = number / 3;

    document.getElementById('text-area').innerHTML = "O dobro de " + number + " é " + double + " <br>A terça parte de " + number + " é " + third;
})