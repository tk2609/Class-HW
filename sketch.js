var tallrect1, tallrect2, smallrect1, smallrect2, bigrect, dome, tri1, tri2;

function setup() {
   createCanvas(1200,800);
  bigrect = createSprite(600, 600, 150, 500);
  bigrect.shapeColor = "green";
  bigrect.debug = true;

  smallrect1 = createSprite(450, 600, 100, 450);
  smallrect1.shapeColor = "green";
  smallrect1.debug = true;
  
  smallrect2 = createSprite(750, 600, 100, 450);
  smallrect2.shapeColor = "green";
  smallrect2.debug = true;

  tallrect1 = createSprite(870, 500, 80, 750);
  tallrect1.shapeColor = "green";
  tallrect1.debug = true;

  tallrect2 = createSprite(330, 500, 80, 750);
  tallrect2.shapeColor = "green";
  tallrect2.debug = true





}

function draw() {
  background(0,0,0);  
  drawSprites();
}