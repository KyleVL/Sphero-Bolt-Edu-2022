/*
Programmer: Kyle VanLandegent
Date: 1.12.22
Program: This is a sandbox where I learn
*/
async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('I am donkey!', true);
	setMainLed({ r: 255, g: 0, b: 0});
		for (var _i1 = 0; _i1 < 3; _i1++) {
			await Sound.Animal.Donkey.play(true);
			setMainLed({ r: 0, g: 255, b: 0});
			await roll((getHeading() + 300), 50, 2);
			setMainLed({ r: 255, g: 0, b: 0});
			await delay (1);
		
		}
	await Sound.Effects.Applause(true);
	
}

