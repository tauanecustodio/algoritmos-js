const textArea = document.getElementById('text-area');

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    let number = parseInt(document.getElementById('number').value);
    const lastNumber = parseInt(document.getElementById('last-number').value);
    const increment = parseInt(document.getElementById('increment').value);

    if (number < lastNumber) {
        while (number <= lastNumber) {
            textArea.innerHTML += number + ", ";
            number = number + increment;
        }
    } else {
        while (number >= lastNumber) {
            textArea.innerHTML += number + ", ";
            number = number - increment;
        }
    }

    textArea.innerHTML += "acabou! <br>";
})

document.querySelector('button[type="reset"]').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('number').value = "";
    document.getElementById('last-number').value = "";
    document.getElementById('increment').value = "";

    textArea.innerHTML = "";
})