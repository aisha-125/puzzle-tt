import Figure from "../Figure.js";

class Teewee extends Figure {
  color = '#b231f0';
  positions = [{x: 3, y:0},{x: 4, y:0},{x: 5, y:0},{x: 4, y:-1}];
  
  constructor(game) {
    super(game);
  }
}

export default Teewee;