const Engine = Matter.Engine;
const World= Matter.World;
const Events=Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;
var division;
var plinkos=[];var divisions=[]; var particles=[];
var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";
var particle;

function setup(){
    var canvas = createCanvas(805,800);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
      }
       for (var j = 75; j <=width; j=j+50) {
          plinkos.push(new Plinko(j,75));
       }
   
       for (var j = 50; j <=width-10; j=j+50) {
           plinkos.push(new Plinko(j,175));
       }
   
       for (var j = 75; j <=width; j=j+50) {
           plinkos.push(new Plinko(j,275));
       }
   
       for (var j = 50; j <=width-10; j=j+50) {
           plinkos.push(new Plinko(j,375));
       }
       
   


}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(30)
    text("Score : "+score,20,40);
    textFont("courier");
    fill("white");
    //text(mouseX + "," + mouseY, 20, 50);
    textSize(30)
    text(" 500 ", 5, 550);
    text(" 500 ", 80, 550);
    text(" 500 ", 160, 550);
    text(" 500 ", 240, 550);
    text(" 100 ", 320, 550);
    text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
    text(" 200 ", 560, 550);
    text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
  
    ground.display();
  
    for (var j = 0; j < particles.length; j++){
        particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();
}

    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();  
    }
    
    if ( gameState =="end") {
      
      textSize(100);
      fill("brown");
      text("Game Over", 150, 250);
    
    }
    if(particle!=null)
    {
       particle.display();
        
    if (particle.body.position.y>760)
        {
    if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
    if ( count>= 5) gameState ="end";                          
              }


    else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
     if ( count>= 5) gameState ="end";

              }
    else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
    if ( count>= 5)  gameState ="end";

              }
        } 
    }

}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}