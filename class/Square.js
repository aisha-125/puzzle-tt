import Figure from "./Figure.js";

class Square extends Figure {
  color = '#f0f000';
  
  constructor(positionStart, map) {
    super(map);
    this.positionStart = positionStart;
  }

  drawSquares() {
    super.drawSquare(this.position, this.color);
  }
}

export default Square;