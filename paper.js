class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'isStatic': false,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.image = loadImage("paper.png");
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      stroke("green");
      strokeWeight(4);
      image(this.image,0, 0, 50, 50);
      pop();
    }
  };
  