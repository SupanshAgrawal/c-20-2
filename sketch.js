var jerry,jerryimage
var tom,tomimage
var back,backimage
var ground


function preload() {
backimage =loadImage("garden.png");
jerryimage=loadImage("jerryOne.png");
tomimage=loadImage("tomOne.png");
}

function setup(){
    createCanvas(1000,800);
    back=createSprite(200,300,600,600);
    back.addImage(backimage);

    jerry=createSprite(100,500,10,10);
    jerry.scale=0.3;
    jerry.addImage(jerryimage);
    
    tom=createSprite(400,500,10,10);
    tom.scale=0.3;
    tom.addImage(tomimage);

     
  ground=createSprite(300,600,600,100);
  ground.scale=1;
  ground.visible=false;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide




    tom.collide(ground);
    jerry.collide(ground);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
