class Plane {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
}

class Hammer {
  constructor(x, y) {
    var options = {
      'density': 4,
      'friction': 1.0,
      'restitution': 0.5
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
//    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
//    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Stone {
  constructor(x, y, r) {
    var options = {
      restitution: 0.8,
      friction: 0.9,
      density: 12
    }
    this.x = x;
    this.y = y;
    this.r = r
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options)
    World.add(world, this.body);
  //  Body.setAngle(this.body, angle);
  }
  display() {
    var rubberpos = this.body.position;
//    var angle = this.body.angle;
    push();
    translate(rubberpos.x, rubberpos.y);
//    rotate(angle);
    rectMode(CENTER)
    strokeWeight(4);
    stroke("black");
    fill("gray");
    ellipse(this.x, this.y, this.r);
    pop();
  }
}

class Rubber {
  constructor(x, y, r) {
    var options = {
      restitution: 0.3,
      friction: 5,
      density: 1
    }
    this.x = x;
    this.y = y;
    this.r = r
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options)
    World.add(world, this.body);
//    Body.setAngle(this.body, angle);
  }
  display() {
    var rubberpos = this.body.position;
//    var angle = this.body.angle;
    push();
    translate(rubberpos.x, rubberpos.y);
//    rotate(angle);
    rectMode(CENTER)
    strokeWeight(4);
    stroke("black");
    fill("yellow");
    ellipse(this.x, this.y, this.r);
    pop();
  }
}

class Iron {
  constructor(x, y, r) {
    var options = {
      restituion: 0.8,
      friction: 0.9,
      density: 30,
			isStatic: false
    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options);
    World.add(world, this.body);
//    Body.setAngle(this.body, angle);
  }
  display() {
    var rubberpos = this.body.position;
//    var angle = this.body.angle;
    push();
    translate(rubberpos.x, rubberpos.y);
//    rotate(angle);
    rectMode(CENTER)
    strokeWeight(4);
    stroke("black");
    fill("darkblue");
    pop();
    ellipse(this.x, this.y, this.r);
  }
}
