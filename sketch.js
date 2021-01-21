var canvas;
var music;
var surface1 , surface2 , surface3 , surface4 , box ; 
var topEdge , leftEdge , rightEdge ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    surface1 = createSprite(100,590,200,20);
    surface1.shapeColor = "red";
    

    surface2 = createSprite(300,590,200,20);
    surface2.shapeColor = "blue";
    

    surface3 = createSprite(500,590,200,20);
    surface3.shapeColor = "green";
    

    surface4 = createSprite(700,590,200,20);
    surface4.shapeColor = "purple";
    

    topEdge = createSprite(400,0,800,5)
    topEdge.visible = false;

    leftEdge = createSprite(0,300,5,600)
    leftEdge.visible = false;

    rightEdge = createSprite(800,300,5,600)
    rightEdge.visible = false;
    
    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 8;
    box.velocityY = 8;

}

function draw() {
    background("orange");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    //bounce(box,topEdge);
    //bounce(box,leftEdge);
    //bounce(box,rightEdge);
    
    //add condition to check if box touching surface and make it bounce
    if (isTouching(box,surface1)){
        box.shapeColor = "red";
        bounce(box,surface1);
        music.play();
    }

    if (isTouching(box,surface2)){
        box.shapeColor = "blue";
        bounce(box,surface2);
        music.play();
    }

    if (isTouching(box,surface4)){
        box.shapeColor = "purple";
        
        bounce(box,surface4);

        music.play();
    }

    if (isTouching(box,surface3)){
        box.shapeColor = "green";
        bounce(box,surface3);
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;

    }    

    drawSprites();
}
