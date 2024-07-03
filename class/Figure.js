class Figure {
  
  constructor(map, game) {
    this.squareSize = 40;
    this.numberSquares = 4;
    this.interval = null;
    this.map = map;
    this.mctx = this.map.ctx;
    this.game = game;
  };
  
  start(){
    this.addMoveEvent();
    this.drawSquares();
    this.interval = setInterval(() => this.fall(), 1000);
  };

  addMoveEvent() {
    document.addEventListener('keydown', (e) => {
      let ltr = e.key.toLowerCase();
      if (ltr === 'a' || ltr === 'arrowleft') {
        this.left();
      } else if (ltr === 'd' || ltr === 'arrowright') {
        this.right();
      }
    });
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

  endBottom() {
    let overflow = false;
    this.positions.forEach(position => {
      if (this.resize(position.y) + this.squareSize >= this.map.canvas.height) {
        overflow = true;
      }
    });
    return overflow;
  };
  
  endLeft() {
    let overflow = false;
    this.positions.forEach(position => {
      if (this.resize(position.x) === 0) {
        overflow = true;
      }
    });
    return overflow;
  };
  
  endRight() {
    let overflow = false;
    this.positions.forEach(position => {
      if (this.resize(position.x) + this.squareSize >= this.map.canvas.width) {
        overflow = true;
      }
    });
    return overflow;
  };

  fall() {
    if (!this.endBottom()) {
      this.map.restoreState();
      this.positions.forEach(position => position.y = position.y + 1);
      this.drawSquares();
    } else {
      this.map.saveState();
      clearInterval(this.interval);
      this.game.generateFigure();
    }
  };

  left() {
    if (!this.endLeft()) {
      this.map.restoreState();
      this.positions.forEach(position => position.x = position.x -1);
      this.drawSquares();
    }
  };

  right() {
    if (!this.endRight()) {
      this.map.restoreState();
      this.positions.forEach(position => position.x = position.x +1);
      this.drawSquares();
    }
  };
}

export default Figure;