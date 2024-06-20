class Figure {
  squareSize = 40;
  squares = [];
  numberSquares = 4;

  constructor(map) {
    this.map = map;
  }
  
  drawSquare(position, color) {
    this.map.fillStyle = color;
    this.map.fillRect(position.x * this.squareSize, position.y * this.squareSize, this.squareSize, this.squareSize);
  }
}

export default Figure;