class Roof {
    constructor(x, y) {
      var options = {
          'isStatic': true
  
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, 400, 40, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, 400, 40);
      pop();
    }
};