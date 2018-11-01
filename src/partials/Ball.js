import { SVG_NS } from "../settings";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }

  render(svg) {
    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "cx", this.boardWidth);
    circle.setAttributeNS(null, "cy", this.boardHeight);
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "fill", "#ffffff");

    svg.appendChild(circle);
  }
}
