class Map {

  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.squareSize = this.width / 10;
    this.ctx = canvas.getContext("2d");
    this.savedState = null;
    this.start();
  };

  start() {
    this.mapGrip();
    this.saveState();
  };

  mapGrip() {
    this.ctx.strokeStyle = "lightblue";
    this.ctx.lineWidth = 0.5;

    for (let x = this.squareSize; x <= this.width; x += this.squareSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.height);
      this.ctx.stroke();
    }

    for (let y = 0; y <= this.height; y += this.squareSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.width, y);
      this.ctx.stroke();
    }
  };

  saveState() {
    this.savedState = this.ctx.getImageData(0, 0, this.width, this.height);
  };

  restoreState() {
    if (this.savedState) {
      this.ctx.putImageData(this.savedState, 0, 0);
    }
  };

}

export default Map;