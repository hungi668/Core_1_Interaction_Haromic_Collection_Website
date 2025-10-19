function setup() {
    let canvas = createCanvas(2000, 900);
    canvas.parent('sketch-container7');
    background(244);

}

function draw() {
    fill("yellow");
    rect(mouseX - 5, mouseY - 5, 10, 10);
    fill("pink")
    circle(mouseX - 10, mouseY, 10);
    circle(mouseX + 10, mouseY, 10);
    circle(mouseX, mouseY - 10, 10);
    circle(mouseX, mouseY + 10, 10);
}