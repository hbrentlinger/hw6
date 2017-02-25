function setup() {
	createCanvas(400, 400);
	
}

function draw() {
	background(220);
strokeWeight(.2);
	
	for(x=0; x<=1000; x+=15){
		noFill();
		
		ellipse(200,0,x,x);
		ellipse(0,200,x,x);
		ellipse(200,400,x,x);
		ellipse(400,200,x,x)
	}
}