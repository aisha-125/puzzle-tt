import Figure from "../Figure.js";

class ClevelandZ extends Figure {
  color = '#eb0045';
  positions = [{x: 3, y:-1},{x: 4, y:-1},{x: 4, y:0},{x: 5, y:0}];
  
  constructor( game) {
    super(game);
  }
}

export default ClevelandZ;