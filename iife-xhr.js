console.log("iife-xhr.js")

function showCarnivores (carnivores) {
	var carnList = document.getElementById("carnList")
	for (var i = 0; i < carnivores.length; i++){
		carnList.innerHTML+=`<li>${carnivores[i]}</li>`;
  	}
}

function showHerbivores (herbivores) {
	var herbList = document.getElementById("herbList")
	for (var i = 0; i < herbivores.length; i++){
		herbList.innerHTML+=`<li>${herbivores[i]}</li>`;
  	}
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);