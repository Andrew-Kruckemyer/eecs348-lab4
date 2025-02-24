function styleChange() {
    var borderR = document.getElementById("border-r").value || 255;
    var borderG = document.getElementById("border-g").value || 255;
    var borderB = document.getElementById("border-b").value || 255;
    var borderWidth = document.getElementById("border-width").value || 2;
    var bgR = document.getElementById("background-r").value || 255;
    var bgG = document.getElementById("background-g").value || 255;
    var bgB = document.getElementById("background-b").value || 255;
    var paragraph = document.getElementById("paragraph");
    paragraph.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
    paragraph.style.borderWidth = `${borderWidth}px`;
    paragraph.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
}