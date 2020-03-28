const sketch = (p) => {
  let beams = [];
  let beam;

  class Beam {
    constructor(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
    }
    shoot() {
      p.stroke(6);
      p.fill(p.random(255));
      p.ellipse(this.x, this.y, 5, 20);
      this.y += this.speed;
    }
  }
  p.mousePressed = () => {
    beam = new Beam(p.mouseX, p.mouseY, -3);
    beams.push(beam);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight * 0.7);
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.7);
  };

  p.draw = () => {
    p.background(0);
    p.textSize(46);
    p.text("👨🏻‍🚀", p.mouseX, p.mouseY);
    for (beam of beams) {
      beam.shoot();
    }
  };
};

export default sketch;
