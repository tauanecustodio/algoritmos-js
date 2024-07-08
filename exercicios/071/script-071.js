const textArea = document.getElementById('text-area');
const arr = []

for (let i = 0; i <= 7; i++) {
  arr.push(999);
}

textArea.innerHTML += arr.join(', ');