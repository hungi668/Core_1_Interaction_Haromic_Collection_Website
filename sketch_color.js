function setup() {
    let canvas = createCanvas(2000, 400, WEBGL);
    canvas.parent('sketch-container9');
    angleMode(DEGREES);
    normalMaterial();

}

function draw() {
    background(244);
    push();
    translate(-105, -10, 0);
    rotateWithFrameCount();
    box(400, 400, 300);
    pop();
}
function rotateWithFrameCount() {
    rotateZ(frameCount);
    rotateX(frameCount);
    rotateY(frameCount);
}