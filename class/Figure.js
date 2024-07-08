class Figure {
  
  constructor(game) {
    this.squareSize = game.map.squareSize;
    this.interval = null;
    this.game = game;
    this.map = this.game.map;
    this.mctx = this.map.ctx;
  };
  
  start(){
    this.drawSquares();
    this.interval = setInterval(() => this.fall(), 1000);
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
    this.mctx.fillRect(x+2, y+2, this.squareSize -4, this.squareSize-4);
    
    this.mctx.strokeStyle = 'black';
    this.mctx.lineWidth = 0.5;
    this.mctx.strokeRect(x+1, y+1, this.squareSize-2, this.squareSize-2);
  };

  fall() {
    if (this.game.checkBottomCells(this.positions)) {
      this.map.restoreState();
      this.positions.forEach(position => position.y = position.y + 1);
      this.drawSquares();
    } else {
      this.map.saveState();
      clearInterval(this.interval);
      this.game.next(this.positions);
    }
  };

  left() {
    if (this.game.checkLeftCells(this.positions)) {
      this.map.restoreState();
      this.positions.forEach(position => position.x = position.x -1);
      this.drawSquares();
    }
  };

  right() {
    if (this.game.checkRightCells(this.positions)) {
      this.map.restoreState();
      this.positions.forEach(position => position.x = position.x +1);
      this.drawSquares();
    }
  };
}

export default Figure;