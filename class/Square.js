import Figure from "./Figure.js";

class Square extends Figure {
  color = '#f0f000';
  
  constructor(map) {
    super(map);
    this.positions = this.calcPositions();
  }

  calcPositions() {
    let positions = [];
    positions.push({x: 4, y:0});
    positions.push({x: 5, y:0});
    positions.push({x: 4, y:1});
    positions.push({x: 5, y:1});

    return positions;
  }
}

export default Square;