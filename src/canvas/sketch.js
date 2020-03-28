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

  const title = {
    name: "DANCE + CODE + ART = ME!!!",
    x: p.windowWidth * 0.5,
    y: p.windowHeight * 0.3,
    height: 22,
  };
  p.draw = () => {
    p.background(0);
    p.textSize(46);
    p.fill(255);
    p.textAlign(p.CENTER);

    if (p.mouseX) {
      p.text("👨🏻‍🚀", p.mouseX, p.mouseY);
    } else {
      p.text("👨🏻‍🚀", p.windowWidth / 2, p.windowHeight * 0.6);
    }

    p.fill(255);
    p.textSize(title.height);
    p.text(title.name, title.x, title.y);

    for (let i = 0; i < beams.length; i++) {
      beams[i].shoot();
      let dx = Math.abs(beams[i].x - title.x);
      let dy = Math.abs(beams[i].y - title.y);
      if (dx < p.textWidth(title.name) / 2 && dy < title.height) {
        p.fill(p.random(255), p.random(255), p.random(255));
        p.textSize(title.height);
        p.text(title.name, title.x, title.y);
      }
      if (beams[i].y < 0) {
        beams.splice(i, 1);
      }
    }
  };
};

export default sketch;
