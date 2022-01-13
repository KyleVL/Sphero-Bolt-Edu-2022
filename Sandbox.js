/*
Programmer: Kyle VanLandegent
Date: 1.12.22
Program: This is a sandbox where I learn
*/
/* async function startProgram() {
	// Write code here
	/*setHeading(270);
	await speak('I am donkey!', true);
	setMainLed({ r: 255, g: 0, b: 0});
		for (var _i1 = 0; _i1 < 3; _i1++) {
			await Sound.Animal.Donkey.play(true);
			setMainLed({ r: 0, g: 255, b: 0});
			await roll((getHeading() + 120), 50, 2);
			setMainLed({ r: 255, g: 0, b: 0});
			await delay (1);
		
		}
	await Sound.Effects.Applause(true);
	
}

setHeading(270);
	await speak('I am donkey!', true);
	setMainLed({ r: 255, g: 0, b: 0});
		for (var _i1 = 0; _i1 < 4; _i1++) {
			await Sound.Animal.Donkey.play(true);
			setMainLed({ r: 0, g: 255, b: 0});
			await roll((getHeading() + 90), 50, 2);
			setMainLed({ r: 255, g: 0, b: 0});
			await delay (1);
		
		}
	await Sound.Effects.Applause(true);
	
}
*/
async function startProgram() {
playMatrixAnimation(0);
}

registerMatrixAnimation({
	frames: [[[1, 1, 6, 6, 6, 6, 1, 1], [1, 6, 6, 6, 6, 6, 6, 1], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [6, 6, 6, 1, 1, 6, 6, 6], [1, 6, 6, 6, 6, 6, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]], [[6, 6, 6, 6, 6, 6, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 6, 1, 6, 6, 1, 6, 6], [6, 1, 1, 6, 6, 1, 1, 6], [6, 6, 6, 6, 6, 6, 6, 6], [6, 1, 1, 1, 1, 1, 1, 6], [1, 6, 1, 1, 1, 1, 6, 1], [1, 1, 6, 6, 6, 6, 1, 1]]],
	palette: [{ r: 255, g: 255, b: 255 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 0, b: 0 }, { r: 255, g: 16, b: 0 }, { r: 255, g: 128, b: 0 }, { r: 255, g: 191, b: 0 }, { r: 255, g: 255, b: 0 }, { r: 185, g: 246, b: 30 }, { r: 0, g: 255, b: 0 }, { r: 185, g: 255, b: 255 }, { r: 0, g: 255, b: 255 }, { r: 0, g: 0, b: 255 }, { r: 145, g: 0, b: 211 }, { r: 157, g: 48, b: 118 }, { r: 255, g: 0, b: 255 }, { r: 204, g: 27, b: 126 }],
	fps: 6,
	transition: MatrixAnimationTransition.None
});



