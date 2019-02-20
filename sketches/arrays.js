function setup() {
  createCanvas(400, 400);
}

var x = [ 10, 75, 150, 300 ];
var dir = [ 3, 3, 3, -3 ];

function draw() {
  background(220);

  for (var i = 0; i < x.length; i++) {
    ellipse(x[i], 200, 40);
    x[i] += dir[i];

    if (x[i] > width) {
      dir[i] = -dir[i];
    }
    
    if (x[i] < 0) {
      dir[i] = -dir[i];
    }
  }
}
