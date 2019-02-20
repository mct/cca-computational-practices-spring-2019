function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(255);
  fill(0, 0, 255);
  noStroke();

  // Draws five circles on the screen, spaced 100 pixels apart
  for (var i = 100; i < 600; i += 100) {
    ellipse(i, 100, 50);
  }
}
