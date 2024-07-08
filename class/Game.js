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
    this.addMoveEvent();
    this.cells = this.freeCells();
  };

  addMoveEvent() {
    document.addEventListener('keydown', (e) => {
      let ltr = e.key.toLowerCase();
      if (ltr === 'a' || ltr === 'arrowleft') {
        this.figure.left();
      } else if (ltr === 'd' || ltr === 'arrowright') {
        this.figure.right();
      }
    });
  };

  freeCells() {
    let cells = [];
    for (let i = 0; i < (this.map.height / this.map.squareSize); i++) {
      cells.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }
    return cells
  };

  setPoints() {
    let points = 0;
    score.innerText = `${points} points`;
  };

  start() {
    this.setPoints();
    this.generateFigure();
  };

  // addPoints() {
  //   points = points + 50 * combo;
  //   this.setPoints();
  //   combo * 2;
  // };

  selectFigure() {
    let i = Math.floor(Math.random() * this.figures.length);
    return this.figures[i];
  };

  generateFigure() {
    switch (this.selectFigure()) {
      case 'Teewee':
        this.figure = new Teewee(this);
        break;
      case 'Hero':
        this.figure = new Hero(this);
        break;
      case 'Smashboy':
        this.figure = new Smashboy(this);
        break;
      case 'BlueRicky':
        this.figure = new BlueRicky(this);
        break;
      case 'OrangeRicky':
        this.figure = new OrangeRicky(this);
        break;
      case 'ClevelandZ':
        this.figure = new ClevelandZ(this);
        break;
      case 'RodhelIslandZ':
        this.figure = new RodhelIslandZ(this);
        break;
      default:
        this.figure = new Smashboy(this);
        break;
    }
    this.figure.start();
  };

  savePositions(positions) {
    positions.forEach(position => this.cells[position.y][position.x] = 1);
  };

  next(positions) {
    this.savePositions(positions);
    this.generateFigure();
  };

  resize(position) {
    return position * this.map.squareSize;
  };

  checkBottomCells(positions) {
    let free = true;
    positions.forEach(position => {
      if (this.resize(position.y) + this.map.squareSize >= this.map.height
        || this.cells[position.y + 1][position.x] != 0) {
        free = false;
      }
    })
    return free;
  };

  checkLeftCells(positions) {
    let free = true;
    positions.forEach(position => {
      console.log(position.x);
      if (this.cells[position.y][position.x - 1] != 0) {
        free = false;
      }
    })
    return free;
  };

  checkRightCells(positions) {
    let free = true;
    positions.forEach(position => {
      if (this.cells[position.y][position.x +1] != 0) {
        free = false;
      }
    })
    return free;
  };
};

export default Game;