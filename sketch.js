let font;
function preload() {
  font = loadFont("LXGWWenKai-Light.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  const s = 100;

  fill(127, 255, 0);
  rect(0, 0, s, s);
  rect(0, height - s, s, s);
  rect(width - s, 0, s, s);
  rect(width - s, height - s, s, s);

  fill(255, 127, 80);
  textSize(100);
  textAlign(CENTER);
  textFont(font);
  text("wang yingxuan", windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
