let circleX;
let circleY;
let circleColor;
let diameter;
let stroke_;

function setup() {
    let canvas = createCanvas(2000, 400);
    canvas.parent('sketch-container6');
    setPositionAndColor();
}

function setPositionAndColor() {
    circleX = random(0, width);
    circleY = random(0, height);
    diameter = random(20, 300);
    stroke_ = random(1, 10);
}

function draw() {
    background(244);
    noFill();
    strokeWeight(stroke_);
    circle(circleX, circleY, diameter);
    strokeWeight(stroke_ - 1);
    circle(circleX - 300, circleY + 200, diameter + 50);
    strokeWeight(stroke_ + 10);
    circle(circleX - 50, circleY - 200, diameter - 100);
    strokeWeight(stroke_ + 100);
    circle(circleX - 500, circleY + 2, diameter - 100);
    strokeWeight(stroke_);
    circle(circleX + 700, circleY - 200, diameter - 100);
    circle(circleX - 700, circleY - 200, diameter - 100);

}

function mousePressed() {
    setPositionAndColor();
}
