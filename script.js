var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

randomButton.onclick = function random() {
    body.style.background = 
    "linear-gradient(to right, " 
    + randomColor() 
    + ", " 
    + randomColor() 
    + ")";
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

setGradient();
css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);