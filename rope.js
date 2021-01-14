class Rope {
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offsetX, y: this.offsetY},
        }
        this.bodyA = body1;
        this.bodyB = body2;
        this.pointB = {x: this.offsetX, y: this.offsetY};
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.newPoint = {x: this.pointB.x + 400,y: 100};
    }
    display(){
        var pos =this.bodyA.position;
        stroke(255, 255, 255);
        line(pos.x, pos.y, this.newPoint.x, this.newPoint.y);
    }
};