function setup() {
    let canvas = createCanvas(2000, 400);
    canvas.parent('sketch-container10');
    background(244);
}

function draw() {
    strokeWeight(random(1, 30))
    point(mouseX, mouseY);
}