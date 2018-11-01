import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener("keydown", event => {
      switch (event.key) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });
  } //end of constructor

  up() {
    // this.y = this.y - this.speed;
    this.y = Math.max(this.y - this.speed, 0);
  }

  down() {
    // this.y = this.y + this.speed;
    this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
  }

  render(svg) {
    let rect1 = document.createElementNS(SVG_NS, "rect");
    rect1.setAttributeNS(null, "width", this.width);
    rect1.setAttributeNS(null, "height", this.height);
    rect1.setAttributeNS(null, "x", this.x);
    rect1.setAttributeNS(null, "y", this.y);
    rect1.setAttributeNS(null, "fill", "#ffffff");

    svg.appendChild(rect1);
  }
}
