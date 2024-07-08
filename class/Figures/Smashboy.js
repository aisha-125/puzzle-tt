import Figure from "../Figure.js";

class Smashboy extends Figure {
  color = '#fdda1d';
  positions = [{x: 4, y:-1},{x: 5, y:-1},{x: 4, y:0},{x: 5, y:0}];
  
  constructor(game) {
    super(game);
  }
}

export default Smashboy;