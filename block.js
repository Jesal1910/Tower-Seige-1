class Block{
    constructor(x, y, width, height) {
        var options = {
          isStactic:true       
       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
  stroke(15);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
