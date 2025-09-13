let rotate1 = 1;
let rotate2 = 1.5;
let rotate3 = 2;
let rotate4 = 2.5;

function setup() {
    let canvas = createCanvas(900, 400);
    canvas.parent('sketch-container');
    rectMode(CENTER);
    angleMode(DEGREES)
}

function draw() {
    background(244);
    translate(width / 2, 400 / 2);
    fill(0);
    rotate(rotate1);
    rect(0, 0, 25, 25);
    rotate1 += 0.1;
    noFill();
    strokeWeight(2);
    stroke(0);
    rotate(rotate3)
    square(0, 0, 200)
    rotate3 += .3;
    rotate(rotate4)
    square(0, 0, 500)
    rotate4 += .04;
    translate(width / 2, 0);
    fill(0);
    rotate(rotate1);
    rect(0, 0, 25, 25);
    rotate1 += 0.1;
    noFill();
    strokeWeight(2);
    stroke(0);
    rotate(rotate3)
    square(0, 0, 200)
    rotate3 += .3;
    rotate(rotate4)
    square(0, 0, 500)
    rotate4 += .08;
}