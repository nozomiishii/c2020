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

  // p.windowResized = () => {
  //   p.resizeCanvas(p.windowWidth, p.windowHeight * 0.7);
  // };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.7);
  };

  let titleX = p.windowWidth * 0.5;
  p.draw = () => {
    p.background(0);
    p.textSize(46);
    p.fill(255);
    p.textAlign(p.CENTER);
    p.text("👨🏻‍🚀", p.mouseX, p.mouseY);

    p.textSize(22);
    p.text("DANCE + CODE + ART = ME!!!", titleX, p.windowHeight * 0.3);

    for (beam of beams) {
      beam.shoot();
    }
    // p.noLoop();
  };
};

export default sketch;
