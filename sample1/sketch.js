function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  var step = 100;
  
  for (var j = 0; j < height; j += step) {
    for (var i = 0; i < width; i += step) {
      var tx = i+step*0.5;
      var ty = j+step*0.5;
      var radius = sin((millis()*0.0005)*PI+(i/width+j/height))*step;
      // var radius = sin((millis()*0.0005)*PI*(i/width+j/height))*step;
      ellipse(tx, ty, radius, radius);
    }
  }
}