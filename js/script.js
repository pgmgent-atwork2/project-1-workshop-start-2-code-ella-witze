document.getElementById("applyColorBtn").addEventListener("click", function() {
    // Haal de kleuren op uit de invoervelden
    var roseColor = document.getElementById("roseColorInput").value;
    var potColor = document.getElementById("potColorInput").value;
    // Wijzig de vulkleur van de roos SVG
    document.querySelector(".svg__rose path").style.fill = roseColor;
    // Wijzig de vulkleur van de grond SVG
    document.querySelector(".svg__soil path").style.fill = potColor;
});
