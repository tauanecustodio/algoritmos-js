const textArea = document.getElementById('text-area');
const arr = [];

for(let i = 5; i <= 50; i+=5) {
    arr.push(i);
} 

textArea.innerHTML = arr.join(', ');