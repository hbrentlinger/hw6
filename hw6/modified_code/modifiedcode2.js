var shade = [50, 20, 45, 25, 60, 80, 30, 12, 77]
var x = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	colorMode(HSB);
	noStroke();
	for (i = 0; i < shade.length; i++) {
		fill(shade[i], 100, 100);
		var x = 0;
		rect(i * width / shade.length + x, 0, width / shade.length, height);
		shade[shade.length - 1] = mouseY;
		x = x - .1;
	}
}

function mouseClicked() {
	append(shade, random(0, 360))
}