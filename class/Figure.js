class Figure {
  squareSize = 40;
  numberSquares = 4;
  interval = null;

  constructor(map) {
    this.map = map;
    this.mctx = this.map.ctx;
    this.positions = this.calcPositions();
  };
  
  start(){
    this.drawSquares();
    this.interval = setInterval(() => this.fall(), 1000);
  }

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
    const x = this.resize(position.x);
    const y = this.resize(position.y);
    
    this.mctx.fillStyle = color;
    this.mctx.fillRect(x, y, this.squareSize, this.squareSize);
    
    this.mctx.strokeStyle = 'lightblue';
    this.mctx.lineWidth = 0.5;
    this.mctx.strokeRect(x, y, this.squareSize, this.squareSize);
  };

  endMap() {
    let overflow = false;
    this.positions.forEach(position => {
      if (this.resize(position.y) + this.squareSize >= this.map.canvas.height) {
        overflow = true;
      }
    });
    return overflow;
  };

  fall() {
    if (!this.endMap()) {
      this.map.restoreState();
      this.positions.forEach(position => position.y = position.y + 1);
      this.drawSquares();
    } else {
      this.map.saveState();
      clearInterval(this.interval);
    }
  };
}

export default Figure;