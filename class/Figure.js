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
    this.interval = setInterval(() => this.down(), 800);
  };

  drawSquares() {
    this.positions.forEach(position => this.drawSquare(position, this.color, this.mctx));
  };

  showSquares() {
    this.positions.forEach(position => {
      let showPosition = {x: position.x - 3, y:position.y + 1};
      this.drawSquare(showPosition, this.color, this.game.frame.ctx)
    });
  }

  resize(position) {
    return position * this.squareSize;
  };

  drawSquare(position, color, canvas) {
    const x = this.resize(position.x);
    const y = this.resize(position.y);
    
    canvas.fillStyle = color;
    canvas.fillRect(x+2, y+2, this.squareSize -4, this.squareSize-4);
    
    canvas.strokeStyle = 'black';
    canvas.lineWidth = 0.5;
    canvas.strokeRect(x+1, y+1, this.squareSize-2, this.squareSize-2);
  };

  down() {
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