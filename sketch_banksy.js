function setup() {
    let canvas = createCanvas(2000, 900);
    canvas.parent('sketch-container5');
    colorMode(HSB);
    noStroke();
    textOutput();

}

function draw() {
    let circleHue = map(mouseX, 0, width, 0, 60);
    let diameter = map(mouseY, 0, height, 20, 100);
    fill(circleHue, 80, 190);
    circle(width / 4, height - 20, diameter + 20);
    circle(width / 15, height / 2, diameter + 50);
    circle(700, height / 2, diameter + 40);
    circle(950, 300, diameter + 5);
    circle(350, 20, diameter + 50);
    circle(1200, 200, diameter + 20);
}