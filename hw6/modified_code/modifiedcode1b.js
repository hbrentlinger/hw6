var sizes = [10, 20, 25, 10, 35,50,20,10,5];

function setup() {
  createCanvas(600, 600);
	
	
}
function draw() {
  noStroke();


  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
		fill(100,100,200);
    ellipse(50+i*50, height/2, sizes[i], sizes[i]);
  }
}