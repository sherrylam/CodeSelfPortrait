/*************************************************************************
    Code Self Portrait
          by Sherry Lam

    Overview - This is a self protrait in p5.js!
 
    ---------------------------------------------------------------------
    Notes:
     (1) Curved lines are hard!
     (2) The background looks especially cool.
**************************************************************************/

var hairColor = '#0f0603';
var hairOutlineColor = '#5e220e';
var skinColor = '#e8b98b';
var skinOutlineColor = '#9c2a16';
var lipColor = '#db5432';
var shirtColor = 170;
var shirtOutlineColor = 100;
var red, green, blue;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  angleMode(DEGREES);

  //setup background color
  red = 255;
  green = 130;
  blue = 211;
}

function draw() {
  background(0);

  //background pattern
  for (let i = 0; i < 9; i++) {
  	for (let j = 0; j < 14; j++) {
      backgroundShape(104 * i - 16, 60 * j);
  	}
  }
    
  neckShoulders();
  shirt();
  hair();
  ears();
  face();
  bangs();
  eyes();
  eyebrows();
  lip();
  nose();
}

function mouseClicked() {
  red = random(255);
  green = random(255);
  blue = random(255);
}

function backgroundShape(x, y) {
  noFill();
  stroke(red, green, blue)
  strokeWeight(2);
  
  beginShape(TRIANGLE_FAN);
  vertex(x, y);  //middle
  vertex(x + 52, y - 30);
  vertex(x + (20 * sqrt(3)), y);
  vertex(x + 52, y + 30);
  vertex(x + (10 * sqrt(3)), y + 30);
  vertex(x, y + 60);
  vertex(x - (10 * sqrt(3)), y + 30);
  vertex(x - 52, y + 30);
  vertex(x - (20 * sqrt(3)), y);
  vertex(x - 52, y - 30);
  endShape();
  
  line(x - 52, y - 30, x - 52, y + 30);
}

function shirt() {
  strokeWeight(5);
  stroke(shirtOutlineColor);
  fill(shirtColor);

  beginShape();
  curveVertex(width/2-350, height);	//start at left arm
  curveVertex(width/2-350, height);
  curveVertex(width/2-292, 680);
  curveVertex(width/2-110, 635);
  curveVertex(width/2-85, 650);
  curveVertex(width/2-55, 670);
  curveVertex(width/2, 680);
  curveVertex(width/2+55, 670);
  curveVertex(width/2+90, 650);
  curveVertex(width/2+100, 635);
  curveVertex(width/2+290, 680);
  curveVertex(width/2+350, height);
  curveVertex(width/2+350, height);
  endShape();
}

function lip() {
  noFill();
  strokeWeight(8);
  stroke(lipColor);

  arc(width/2, height/2+75, 130, 65, 15, 165);
}

function nose() {
  noFill();
  strokeWeight(5);
  stroke(skinOutlineColor);

  arc(width/2, height/2+35, 30, 15, 15, 165);
}

function eyebrows() {
  noFill();
  strokeWeight(10);

  arc(width/2-93, height/2-80, 120, 55, 195, 335);  //left
  arc(width/2+93, height/2-80, 120, 55, 205, 345);  //right
}

function ears() {
  stroke(skinOutlineColor);
  strokeWeight(5);
  fill(skinColor);

  ellipse(width/2-195, 375, 50, 75);  //left
  ellipse(width/2+195, 375, 50, 75);  //right
}

function neckShoulders() {
  stroke(skinOutlineColor);
  strokeWeight(5);
  fill(skinColor);

  beginShape();
  curveVertex(width/2-350, height); //starts left side
  curveVertex(width/2-350, height);
  curveVertex(width/2-290, 680);
  curveVertex(width/2-100, 635);
  curveVertex(width/2-75, 570);
  curveVertex(width/2, 600);
  curveVertex(width/2+75, 570);
  curveVertex(width/2+100, 635);
  curveVertex(width/2+290, 680);
  curveVertex(width/2+350, height);
  curveVertex(width/2+350, height);
  endShape();
}

function face() {
  fill(skinColor);
  strokeWeight(5);
  stroke(skinOutlineColor);

  arc(width/2, height/2-50, 375, 500, -43, 225, OPEN);
}

function hair() {
  stroke(hairOutlineColor);
  strokeWeight(5);
  fill(hairColor);
  
  //left side
  beginShape();
  curveVertex(440, 105);
  curveVertex(440, 105);
  curveVertex(400, 80);
  curveVertex(350, 75);
  curveVertex(275, 110);
  curveVertex(200, 200);
  curveVertex(165, 340);
  curveVertex(170, 470);
  curveVertex(175, 675);
  curveVertex(155, 770);
  curveVertex(300, 770);
  vertex(width/2-85, 580);
  vertex(width/2-85, 480);
  curveVertex(440, 300);
  curveVertex(440, 300);
  endShape();
  
  //right side
  beginShape();
  curveVertex(440, 105);
  curveVertex(440, 105);
  curveVertex(480, 92);
  curveVertex(525, 110);
  curveVertex(570, 155);
  curveVertex(610, 225);
  curveVertex(635, 320);
  curveVertex(635, 420);
  curveVertex(625, 575);
  curveVertex(635, 700);
  curveVertex(645, 770);
  curveVertex(495, 770);
  curveVertex(width/2+85, 580);
  curveVertex(width/2+85, 480);
  curveVertex(440, 300);
  curveVertex(440, 300);
  endShape();
}

function bangs() {
  //hairline
  stroke(hairColor);
  strokeWeight(5);

  arc(width/2, 300, 400, 200, 213, 329, OPEN);
  
  //fill in hair
  fill(hairColor);
  strokeWeight(0);

  beginShape();  
  vertex(430, 150);
  vertex(580, 200);
  vertex(632, 360);
  vertex(620, 418);
  vertex(603, 335);
  vertex(570, 280);
  vertex(528, 222);
  vertex(475, 207);
  vertex(420, 200);
  vertex(355, 202);
  vertex(298, 213);
  vertex(245, 280);
  vertex(199, 335);
  vertex(185, 353);
  vertex(175, 405);
  vertex(168, 368);
  vertex(220, 200);
  vertex(360, 140);
  endShape(CLOSE);
  
  //bangs
  noFill();
  stroke(hairOutlineColor);
  strokeWeight(5);

  beginShape();  //left
  vertex(420, 200);
  curveVertex(420, 200);
  curveVertex(400, 182);
  curveVertex(365, 170);
  curveVertex(315, 195);
  curveVertex(240, 290);
  curveVertex(195, 340);
  curveVertex(180, 370);
  curveVertex(175, 430);
  curveVertex(175, 430);
  endShape();
  
  beginShape();  //right
  curveVertex(620, 430);
  curveVertex(620, 430);
  curveVertex(600, 330);
  curveVertex(540, 240);
  curveVertex(505, 200);
  curveVertex(470, 180);
  curveVertex(440, 185);
  curveVertex(420, 200);
  curveVertex(420, 200);
  endShape();
}

function eyes() {
  //eyewhites
  fill(255);
  strokeWeight(0);

  beginShape();  //left
  vertex(width/2-130, 343);
  bezierVertex(295, 330, 325, 330, width/2-50, 345);
  bezierVertex(330, 380, 285, 385, width/2-130, 343);
  endShape();

  beginShape();  //right
  vertex(width/2+130, 343);
  bezierVertex(505, 330, 475, 330, width/2+50, 345);
  bezierVertex(470, 380, 510, 385, width/2+130, 343);
  endShape();
  
  //double eyelids
  noFill();
  strokeWeight(3);
  stroke(skinOutlineColor);

  arc(width/2-101, height/2-40, 110, 70, 230, 340);  //left
  arc(width/2+101, height/2-40, 110, 70, 200, 310);  //right
  
  //eyeballs
  strokeWeight(0);
  fill(0);

  ellipse(width/2-90, height/2-50, 40, 38);  //left
  ellipse(width/2+90, height/2-50, 40, 38);  //right
  
  //eyelines
  stroke(hairOutlineColor);
  strokeWeight(5);
  noFill();

  arc(width/2-93, height/2-40, 100, 55, 200, 340);  //left top
  arc(width/2-90, height/2-61, 80, 70, 95, 170);  //left botttom
  arc(width/2+93, height/2-40, 100, 55, 200, 340);  //right top
  arc(width/2+90, height/2-61, 80, 70, 10, 85);  //right bottom
  
  //highlight
  strokeWeight(0);
  fill(230);

  ellipse(width/2-95, 345, 10);  //left
  ellipse(width/2+85, 345, 10);  //right
}