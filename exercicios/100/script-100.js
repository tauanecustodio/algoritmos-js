const textArea = document.getElementById("text-area");

function mediaCalc(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function situacao(media) {
  if (media >= 7) {
    return "APROVADO";
  } else if (media >= 5) {
    return "RECUPERAÇÃO";
  } else {
    return "REPROVADO";
  }
}

document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (e) {
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2)) {
      textArea.innerHTML = "Insira valores numéricos válidos";
      return;
    }

    const media = mediaCalc(nota1, nota2);

    textArea.innerHTML = `Resultado: ${media.toFixed(2)} <br>Situação: ${situacao(media)}`;
  });
