var ball, db, result, position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    db = firebase.database();
    result = db.ref('Ball/Position')
    result.on('value',(a)=>{
        console.log(a.val());
        position = a.val();
        ball.x = position.x;
        ball.y = position.y;
    })
    



}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    result.set({
        'x':ball.x + x,
        'y':ball.y + y
    })
}
