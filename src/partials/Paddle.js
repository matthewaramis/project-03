import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }
  //...

  render(svg) {
    let rect1 = document.createElementNS(SVG_NS, "rect");
    rect1.setAttributeNS(null, "width", this.width);
    rect1.setAttributeNS(null, "height", this.height);
    rect1.setAttributeNS(null, "x", this.x);
    rect1.setAttributeNS(null, "y", this.y);
    rect1.setAttributeNS(null, "fill", "#ffffff");

    // rect2.setAttributeNS(null, "width", this.width);
    // rect2.setAttributeNS(null, "height", this.height);
    // rect2.setAttributeNS(null, "x", this.x);
    // rect2.setAttributeNS(null, "y", this.y);
    // rect2.setAttributeNS(null, "fill", "#ffffff");

    svg.appendChild(rect1);
    // svg.appendChild(rect2);
  }
}
