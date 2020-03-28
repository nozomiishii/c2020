const sketch = (p) => {
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight * 0.7);
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight * 0.7);
  };
  p.draw = () => {
    p.rect(0, 0, 100, 100);
    p.background(0);
  };
};

export default sketch;
