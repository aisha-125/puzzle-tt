import Figure from "./Figure.js";

class RodheIslandZ extends Figure {
  color = '#3dca31';
  positions = [{x: 4, y:-1},{x: 5, y:-1},{x: 3, y:0},{x: 4, y:0}];
  
  constructor(map) {
    super(map);
  }
}

export default RodheIslandZ;