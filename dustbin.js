class Bin {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic': true
      }
      this.image = loadImage("dustbin.png");
      this.body = Bodies.rectangle(900,170, 150, 200, options);
      this.width = 150;
      this.height = 200;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
  