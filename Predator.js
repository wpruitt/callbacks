console.log("predator.js")

var Predator = (function(ogPred) {
	var carnivores = [];
	var herbivores = [];
    ogPred.loadCarnivores = function(callbackFunction) {
    	var loader = new XMLHttpRequest();
    	console.log(loader)
    	loader.addEventListener("load", function () {
        // Set the value of the private array
    		carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        	callbackFunction(carnivores)
    	});
      	loader.open("GET", "carnivores.json");
      	loader.send();
  	}
    ogPred.loadHerbivores = function (callbackFunction) {
   		var load = new XMLHttpRequest();
   		console.log(load)
	   	load.addEventListener("load", function(){
	   		herbivores = JSON.parse(this.responseText);
	   		console.log(herbivores)
	   		callbackFunction(herbivores)
	   	});
	   	load.open("GET", "herbivores.json");
	   	load.send();
	}
	return ogPred
}(Predator || {}));