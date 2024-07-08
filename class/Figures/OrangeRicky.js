import Figure from "../Figure.js";

class OrangeRicky extends Figure {
  color = '#ff8300';
  positions = [{x: 3, y:0},{x: 4, y:0},{x: 5, y:0},{x: 5, y:-1}];
  
  constructor(game) {
    super(game);
  }
}

export default OrangeRicky;