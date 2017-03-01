var shade = [50, 20, 45, 25, 60,80,30,12,77]


function setup() {
	createCanvas(400, 400);
}

function draw() {
	colorMode(HSB);
	noStroke();
	
	for (i = 0; i < shade.length; i++) {

	fill(shade[i], 100, 100);
	rect(i*50+100 / 5, 0, width / 5, height);
}
}