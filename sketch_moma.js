function setup() {
    let canvas = createCanvas(2000, 400);
    canvas.parent('sketch-container3');
    background(244);
}

function draw() {
    ellipse(mouseX, mouseY, 50, 50);
}