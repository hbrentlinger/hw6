function setup() {
	createCanvas(400, 400);
	
}

function draw() {
	background(220);
strokeWeight(10);
	
	for(x=0; x<=1000; x+=40){
		noFill();
		
		ellipse(200,0,x,x)
	}
}