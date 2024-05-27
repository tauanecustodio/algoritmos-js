document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const metrosInput = document.getElementById('metros');
    const metros = parseFloat(metrosInput.value);
    const min = parseFloat(metrosInput.min);
    const max = parseFloat(metrosInput.max);
    const alertDiv = document.getElementById("alert-div");
    const textArea = document.getElementById("text-area");

    if (metros < min || metros > max || isNaN(metros)) {
        alertDiv.innerHTML = `O valor deve estar entre ${min} e ${max}`;
        return;
    };

    alertDiv.innerHTML = "";
    document.getElementById("result-km").innerHTML = (metros / 1000).toFixed(2).replace('.',',');
    document.getElementById("result-hm").innerHTML = (metros / 100).toFixed(2).replace('.',',');
    document.getElementById("result-dam").innerHTML = (metros / 10).toFixed(2).replace('.',',');
    document.getElementById("result-dm").innerHTML = (metros * 10).toFixed(2).replace('.',',');
    document.getElementById("result-cm").innerHTML = (metros * 100).toFixed(2).replace('.',',');
    document.getElementById("result-mm").innerHTML = (metros * 1000).toFixed(2).replace('.',',');

    textArea.innerHTML = "A distância de " + metros + "m corresponde a: ";
});