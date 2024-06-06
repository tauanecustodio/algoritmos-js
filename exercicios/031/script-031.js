// declaração de variáveis
const textArea = document.getElementById('text-area');

// funções: escolha do computador, quem venceu, animação para mostrar o resultado
function computerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    return choices[Math.floor(Math.random() * choices.length)];
};

function winPlayer(person, computer) {
    if (person == computer) {
        return "Empate";
    } else if (person == 'pedra' && computer == 'tesoura') {
        return "Você ganhou";
    } else if (person == 'papel' && computer == 'pedra') {
        return "Você ganhou";
    }  else if (person == 'tesoura' && computer == 'papel') {
        return "Você ganhou";
    } else {
        return "Você perdeu";
    };
};

function animationResult(personPlayer, computerPlayer, result) {
    textArea.innerHTML = "Jo...";
    setTimeout(() => {
        textArea.innerHTML = "JO... KEN...";
        setTimeout(() => {
            textArea.innerHTML = "JO... KEN... PO...";
            setTimeout(() => {        
                textArea.innerHTML = "VOCÊ: " + personPlayer + "<br>COMPUTADOR: " + computerPlayer + "<br>RESULTADO: " + result;
            }, 500);
        }, 500);
    }, 500);
};

// manipulação do dom

document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const jokenpoInputs = document.querySelectorAll('input[name="jokenpo"]');
    let personPlayer = null;
    let computerPlayer = computerChoice();

    jokenpoInputs.forEach((radio) => {
        if (radio.checked) {
            personPlayer = radio.value;
        };
    });

    if (personPlayer == null) {
        textArea.innerHTML = "Selecione uma opção";
        return;
    };

    const result = winPlayer(personPlayer, computerPlayer);
    animationResult(personPlayer, computerPlayer, result);
});