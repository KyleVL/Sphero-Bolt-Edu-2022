/*
Programer: Kyle VanLandegent
Team Member: Nolan Loukes
Program: Maze
*/
async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('Start');
	await roll ((getHeading() + 90), 73,2);
	setMainLed ({ r: 0, g: 0, b: 255});
	await roll((getHeading() + 90), 52, 2);
}
