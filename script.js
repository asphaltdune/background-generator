var css = document.querySelector("code");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to top, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function defaultColor(){
body.style.background="linear-gradient(to top," +
	color1.value +", " +color2.value + ")";
}

function randomColour() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

button.addEventListener('click', function(){
    randomColour();
});

body.addEventListener("onload", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);