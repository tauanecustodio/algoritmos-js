const textArea = document.getElementById('text-area');
const arr = [];

for(let i = 0; i <= 9; i++) {
    if (i % 2 != 0) {
        arr.push(3);
    } else {
        arr.push(5)
    }
}

textArea.innerHTML = arr.join(', ');