function setup() {
  createCanvas(600, 400);
}

var ball1 = {
  x: 0,
  y: 100,
  dir: 10,
}

var ball2 = {
  x: 100,
  y: 200,
  dir: 5,
}

function draw() {
  background(220);
  
  // Draw balls
  fill(200, 200, 0);
  ellipse(ball1.x, ball1.y, 50);
  ellipse(ball2.x, ball2.y, 50);
  
  // Update balls
  ball1.x += ball1.dir;
  ball2.x += ball2.dir;

  // Check if balls are off right hand side of screen
  if (ball1.x >= width) {
    ball1.dir = -ball1.dir;
  }
  if (ball2.x >= width) {
    ball2.dir = -ball2.dir;
  }

  // Check if balls are off left hand side of screen
  if (ball1.x <= 0) {
    ball1.dir = -ball1.dir;
  }
  if (ball2.x <= 0) {
    ball2.dir = -ball2.dir;
  }
}
