document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const valueA = parseFloat(document.getElementById('valueA').value);
    const valueB = parseFloat(document.getElementById('valueB').value);
    const valueC = parseFloat(document.getElementById('valueC').value);

    const deltaValue = (valueB * valueB) - (4 * valueA * valueC);

    document.getElementById('text-area').innerHTML = `&Delta; = ${valueB}<sup>2</sup> - 4 * ${valueA} * ${valueC} = ${deltaValue}`;
});