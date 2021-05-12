class Polygon{
    constructor(x, y) {
        var options = {
     isStactic:true       
        }
        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.width = 60;
        this.height = 60;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}
