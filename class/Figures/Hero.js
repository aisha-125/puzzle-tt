import Figure from "../Figure.js";

class Hero extends Figure {
  color = '#21cdff';
  positions = [{x: 3, y:0},{x: 4, y:0},{x: 5, y:0},{x: 6, y:0}];
  
  constructor(game) {
    super(game);
  }
}

export default Hero;