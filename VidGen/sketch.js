const density = "N@#W$9876543210?!abc;:+=-,._";

let bria;

function preload() {
  bria = loadImage("./bria.JPG");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(bria, 0, 0, width, height);
}
