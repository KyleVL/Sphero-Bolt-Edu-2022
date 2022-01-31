/*
Programer: Kyle VanLandegent
Team Member: Nolan Loukes
Program: Maze
*/
async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('Start');
	// Challenge 1
	await roll ((getHeading() + 90), 72,2);
	setMainLed ({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 90), 67, 2);
	//Chalenge 2
	await Sound.Animal.SeaLion.play(true);
	await roll((getHeading() + 90), 43, 2);
	//Chalenge 3
	await roll((getHeading() + 45), 40, 2);
	await roll((getHeading() + 270), 24, 2);
	setMainLed ({ r: 255, g: 0, b: 0});
}
	

