var x = 210;
var y = 290;
var r = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // draw puff of smoke
  // fades darker as it gets closer to 0
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-10, -10, 20, 20);

  // up 3 pixels
  y -= 3;

  // rotate 0.05 radians, which is about 2.8 degrees
  r += 0.05

  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
}
