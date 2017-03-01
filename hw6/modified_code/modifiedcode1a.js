var bug; // Declare object

function setup() {
	createCanvas(710, 400);
	// Create object
	bug = new Jitter();
}

function draw() {
	background(255);
	bug.move();
	bug.display();
	noStroke();
	fill(22,199,200);
}


function Jitter() {
	this.x = 200;
	this.y = 200;
	this.diameter = random(10, 30);
	this.speed = .2;

	this.move = function() {
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	};

	this.display = function() {

		ellipse(this.x, this.y, 30, 30);
		ellipse(this.x - 50, this.y, 20, 20);
		ellipse(this.x - 100, this.y, 15, 15);
		ellipse(this.x + 50, this.y, 20, 20);
		ellipse(this.x + 110, this.y, 60, 60);
		ellipse(this.x + 175, this.y, 40, 40);
		ellipse(this.x + 220, this.y, 30, 30);
		ellipse(this.x + 260, this.y, 20, 20);
		ellipse(this.x + 300, this.y, 15, 15);
	}
};