import Hero from "../class/Figures/Hero.js";
import Smashboy from "../class/Figures/Smashboy.js";
import Teewee from "../class/Figures/Teewee.js";
import OrangeRicky from "../class/Figures/OrangeRicky.js";
import BlueRicky from "../class/Figures/BlueRicky.js";
import ClevelandZ from "../class/Figures/ClevelandZ.js";
import RodhelIslandZ from "../class/Figures/RodheIslandZ.js";

class Game {

  constructor(map, score, figures) {
    this.map = map;
    this.score = score;
    this.figures = figures;
    this.figure;
  };

  setPoints() {
    score.innerText = `${points} points`;
  };

  addPoints() {
    points = points + 50 * combo;
    this.setPoints();
    combo * 2;
  };

  selectFigure() {
    let i = Math.floor(Math.random() * this.figures.length);
    return this.figures[i];
  };

  generateFigure() {
    switch (this.selectFigure()) {
      case 'Teewee':
        this.figure = new Teewee(this.map, this);
        break;
      case 'Hero':
        this.figure = new Hero(this.map, this);
        break;
      case 'Smashboy':
        this.figure = new Smashboy(this.map, this);
        break;
      case 'BlueRicky':
        this.figure = new BlueRicky(this.map, this);
        break;
      case 'OrangeRicky':
        this.figure = new OrangeRicky(this.map, this);
        break;
      case 'ClevelandZ':
        this.figure = new ClevelandZ(this.map, this);
        break;
      case 'RodhelIslandZ':
        this.figure = new RodhelIslandZ(this.map, this);
        break;
      default:
        this.figure = new Smashboy(this.map, this);
        break;
      }
      this.figure.start();
  }
}

export default Game;