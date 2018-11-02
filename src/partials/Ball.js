import { SVG_NS } from "../settings";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
  }

  reset() {
    this.ax = 0.001;
    this.ay = 0.001;

    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }

    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;
    if (hitRight || hitLeft) {
      this.ax *= this.ax;
      this.vx *= -1;
    } else if (hitTop || hitBottom) {
      this.ay *= this.ay;
      this.vy *= -1;
    }
  }

  render(svg) {
    this.x += this.vx;
    this.y += this.vy;

    this.wallCollision();

    //draw ball
    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "fill", "#ffffff");
    circle.setAttributeNS(null, "stroke", "red");
    circle.setAttributeNS(null, "stroke-width", 4);

    svg.appendChild(circle);
  }
}
