function setup() {
    let canvas = createCanvas(2000, 900);
    canvas.parent('sketch-container4');
    background(244);
    strokeWeight(5);
    stroke
    colorMode(RGB);
    setLineDash([20, 10]);
}

function mouseDragged() {
    let lineHue = mouseX - mouseY;
    stroke(lineHue, 90, 100);
    strokeJoin(BEVEL);
    strokeCap(SQUARE);
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
}