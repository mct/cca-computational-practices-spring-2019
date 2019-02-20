var balls = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  
  for (i = 0; i < 15; i++) {
    // Create a new ball object
    var ball = {
        x: random(width),
        y: random(height),
        dir: random(2, 5),
        hue: random(360),
    }

    // Add it to our list of balls
    balls.push(ball);
  }
}

function draw() {
  background(220);

  for (var i = 0; i < balls.length; i++) {
    // Draw the ball
    fill(balls[i].hue, 100, 100);
    ellipse(balls[i].x, balls[i].y, 40);
    balls[i].x = balls[i].x + balls[i].dir;

    // If ball has fallen off right hand side of screen
    if (balls[i].x > width) {
      balls[i].dir = -balls[i].dir;
    }

    // If ball has falled off left hand side of screen
    if (balls[i].x < 0) {
      balls[i].dir = -balls[i].dir;
    }
  }
}
