class Figure {
  squareSize = 39;
  squares = [];
  numberSquares = 4;

  constructor(map) {
    this.map = map;
  }

  drawSquare(position, color) {
    this.map.fillStyle = color;
    this.map.fillRect(position.x, position.y, this.squareSize, this.squareSize);
  }
}

export default Figure;