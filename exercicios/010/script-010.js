document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();

    const wallWidth = document.getElementById('width').value;
    const wallHeight = document.getElementById('height').value;
    const wallSquareMeters = wallHeight * wallWidth;
    const paintCans = wallSquareMeters / 2;

    document.getElementById('text-area').innerHTML = `Metros quadrados: ${wallSquareMeters}m²<br>
    Litros de tinta: ${paintCans}L`;
})