import Figure from "../Figure.js";

class BlueRicky extends Figure {
  color = '#0f6cf2';
  positions = [{x: 3, y:0},{x: 4, y:0},{x: 5, y:0},{x: 3, y:-1}];
  
  constructor(map, game) {
    super(map, game);
  }
}

export default BlueRicky;