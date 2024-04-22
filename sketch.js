function setup() {
  createCanvas(800, 600);//criar tela
 background("pink");
}
  
function draw() {
  stroke("blue");
  fill("red")

  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
  }
}