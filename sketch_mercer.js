function setup() {
    let canvas = createCanvas(2000, 400, WEBGL);
    canvas.parent('sketch-container8');
    background(244);
    angleMode(DEGREES);
    strokeWeight(5);
    fill(140, 90, 90);
    stroke(0);
}

function draw() {
    background(244);
    orbitControl();
    for (let zAngle = 0; zAngle < 180; zAngle += 30) {
        for (let xAngle = 0; xAngle < 360; xAngle += 30) {
            push();
            rotateZ(zAngle);
            rotateX(xAngle);
            translate(0, 400, 0);
            box();
            pop();
        }

    }
}