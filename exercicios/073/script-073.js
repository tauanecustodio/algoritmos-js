const textArea = document.getElementById('text-area');
const arr = [];

for(let i = 9; i >= 0; i--) {
    arr.push(i);
}

textArea.innerHTML = arr.join(', ')