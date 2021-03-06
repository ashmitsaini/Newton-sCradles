class Bob {
    constructor(x, y, d) {
      var options = {
          'isStatic': false,
          'restitution':1.3,
          'friction': 0,
          'density': 0.5
      }
      this.x = x;
      this.y = y;
      this.d = d;
      this.body = Bodies.circle(x,y,d/2, options);
      World.add(world, this.body);

    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      ellipse(0, 0, this.d, this.d);
      pop();

    }
  };