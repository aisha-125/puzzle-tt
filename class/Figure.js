class Figure {
  squareSize = 40;
  numberSquares = 4;

  constructor(map) {
    this.map = map;
    this.mctx = this.map.ctx;
    this.positions = this.calcPositions();
  };

  calcPositions() {
    throw new Error("calcPositions() debe ser implementado por la subclase");
  };

  drawSquares() {
    this.positions.forEach(position => this.drawSquare(position, this.color));
  };

  resize(position) {
    return position * this.squareSize;
  };

  drawSquare(position, color) {
    this.mctx.fillStyle = color;
    this.mctx.fillRect(this.resize(position.x), this.resize(position.y), this.squareSize, this.squareSize);
  };

  endMap() {
    let overflow  = false;
    this.positions.forEach(position => {
      if (this.resize(position.y) + this.squareSize >= this.map.canvas.height) {
        overflow  = true;
        this.map.saveState();
      }
    }); 
    return overflow;
  };

  fall() {
    if (!this.endMap()) { 
    this.map.restoreState();
    this.positions.forEach(position => position.y = position.y + 1);
    this.drawSquares();
    }
  };
}

export default Figure;