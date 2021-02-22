const aplyLinerGradient = document.querySelector("body");
const valueGradient = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll("#color");


const setGradient = () => {
	aplyLinerGradient.style.background = 
		`linear-gradient(to right, ${color1.value}, ${color2.value})`;
	valueGradient.textContent = aplyLinerGradient.style.background;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)