function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background('rgb(181,27,181)');
  fill('rgb(213,211,211)');
  circle(200,200,300);
  fill('white');
  circle(150,150,60);
  circle(250,150,60);
  //fill('black');
  //circle(150,150,45);
  //circle(250,150,25);
  //line(150,250,250,245);
  
  let grauInicial = 4*PI;
  
  arc(200, 250, 80, 80, grauInicial , PI, CHORD);
 
  
  fill('rgb(255,98,195)');
  triangle(200,180,170,220,220,220);
  line(125,106,178,120);
  line(225,116,279,106);
  //circle(250,150,25);
  
  olhoX = map(mouseX,0,400,132,166);
  olhoY = map(mouseY,0,400,133,169);
  
  circle(olhoX,olhoY,25)
  circle(olhoX+100,olhoY,25)
  
  if(mouseIsPressed){
    console.log(mouseX,mouseY);
    
  }
}
