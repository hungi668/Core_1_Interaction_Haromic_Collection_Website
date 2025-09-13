let symmetry = 6;
let angle = 360 / symmetry;

function setup() {
    let canvas = createCanvas(1000, 400);
    canvas.parent('sketch-container2');
    angleMode(DEGREES);
    background(244);
}

function draw() {
    translate(width / 2.5, height / 2);

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let lineStartX = mouseX - width / 2;
        let lineStartY = mouseY - height / 2;
        let lineEndX = pmouseX - width / 2;
        let lineEndY = pmouseY - height / 2;

        if (mouseIsPressed) {
            for (let i = 0; i < symmetry; i++) {
                push();
                rotate(angle * i);
                stroke(0, 0, 100);
                strokeWeight(2);
                line(lineStartX, lineStartY, lineEndX, lineEndY);
                push();
                scale(1, -1);
                line(lineStartX, lineStartY, lineEndX, lineEndY);
                pop();
                pop();
            }
        }
    }
}
