let rx = 0;
let ry = 0;
let dx = 0;
let dy = 0;

function preload(){
  earth = loadImage("https://www.cs.unm.edu/~bmatthews1/hosted/land_ocean_ice_cloud_2048.jpg");
  sky   = loadImage("https://www.cs.unm.edu/~bmatthews1/hosted/TychoSkymapII.t5_04096x02048.jpg");
}

function setup (){
  pixelDensity(1);
  createCanvas(0, 0, WEBGL);
  colorMode(HSB, 1, 1, 1);
  windowResized();
}

function draw(){
  background(0);
  noStroke();
  
  rotateX(ry);
  rotateY(rx);
  if (!mouseIsPressed) rx -= .001;
  
  texture(sky);
  sphere(min(width, height)*4, 60, 40);
  fill(0, .2);
  sphere(min(width, height)*3, 60, 40);
  
  noFill();
  ambientLight(.2, .2, .03);
  pointLight(1, 0, 1, 10000, -10000, 10000);
  pointLight(1, 0, .8, 10000, -10000, 10000);
  texture(earth);
  sphere(min(width, height)*.3, 60, 40);
  
  rx += dx;
  ry += dy;
  dx *= .9;
  dy *= .9;
  
  ry = constrain(ry, -PI/2, PI/2);
}

function touchMoved(){
  dx = (mouseX - pmouseX)/100;
  dy = (pmouseY - mouseY)/100;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}