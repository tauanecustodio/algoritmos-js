const textArea = document.getElementById('text-area');

document.getElementById('do-arr-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const arr = [];

    for(let i = 0; i < 7; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }

    textArea.innerHTML = arr.join(', ');
})