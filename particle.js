class particle{
    constructor(x,y){
var options={
    'restitution':0.6,
    'friction':0.02,
  
}
this.Visiblity=225;
this.r=12
this.body=Bodies.circle(x, y, this.r, options);
this.image=loadImage("fotos/piedra.png")
Matter.Body.setVelocity(this.body, {x:random(-7, 7), y:+13})
World.add(world, this.body);

    }

display(){
 
    if(this.body.position.y<518){
        var pos=this.body.position;
        var angle = this.body.angle;    

push();
translate(pos.x, pos.y)
rotate(angle)
imageMode(RADIUS)
image(this.image, 0, 0, this.r, this.r)
pop();

}

else{
    World.remove(world, this.body)
    push();
    this.Visiblity=this.Visiblity-5;
    tint(225, this.Visiblity);
    image(this.image, this.body.position.x,this.body.position.y, this.r, this.r)
  pop();
          }
  



}

}