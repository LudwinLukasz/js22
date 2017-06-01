var femaleNames = ["Asia", "Basia", "Kasia", "Ola", "Jola"];
var maleNames = ["Jan", "Franek", "Kazek", "Arek", "Bronek"];
var allNames = femaleNames.concat(maleNames);
var newName = "Gerwazy";
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}

console.log("cała tablica: " + allNames.toString());
