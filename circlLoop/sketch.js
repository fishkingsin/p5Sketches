var current;
var previous;

function setup() {
  var vanvas = createCanvas(600,600);
  
  colorMode(HSB, 100);
  current = createVector(0,0);
  previous = createVector(0,0);
  var random = parseInt(getRandomArbitrary(0,4));
  
}

function draw() {
  current.x = mouseX;
  current.y = mouseY;
  background(0);
  
  blendMode(ADD);
  var force = p5.Vector.sub(current, previous);
  force.mult(0.05);
  var v = force;
  
  // console.log(force);
  var t = millis()*0.0009 * (v.x+1);

  var x = width*0.5;
  var y = height*0.5;
  var num = 5;
  var offset=10 * (v.x+1);
  // New particle's force is based on mouse movement

  for (var i = 0; i< num; i ++) {
    var tx = x+sin(t*i+i)*offset;
    var ty = y+cos(t*i+i)*offset;

    stroke((i/(num*1.0))*100, 100, 100);
    strokeWeight(10); 
    noFill();
    var radius     = 200;
    ellipse(tx, ty, radius, radius);
  }
  blendMode(NORMAL);
  
  previous.x = current.x;
  previous.y = current.y;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
