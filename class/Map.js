class Map {

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.savedState = null;
  }

  mapGrip() {
    let squareSize = 40;
    let width = this.canvas.width;
    let height = this.canvas.height;
    this.ctx.strokeStyle = "lightblue";
    this.ctx.lineWidth = 0.5;
  
    for (let x = squareSize; x <= width; x += squareSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, height);
      this.ctx.stroke();
    }
  
    for (let y = 0; y <= height; y += squareSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(width, y);
      this.ctx.stroke();
    }
  };

  saveState() {
    this.savedState = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  };

  restoreState() {
    if (this.savedState) {
      this.ctx.putImageData(this.savedState, 0, 0);
    }
  };
  
}

export default Map;