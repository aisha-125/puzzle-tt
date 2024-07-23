import Hero from "../class/Figures/Hero.js";
import Smashboy from "../class/Figures/Smashboy.js";
import Teewee from "../class/Figures/Teewee.js";
import OrangeRicky from "../class/Figures/OrangeRicky.js";
import BlueRicky from "../class/Figures/BlueRicky.js";
import ClevelandZ from "../class/Figures/ClevelandZ.js";
import RodhelIslandZ from "../class/Figures/RodheIslandZ.js";

class Game {

  constructor(map, frame, score, figures) {
    this.map = map;
    this.frame = frame;
    this.score = score;
    this.figures = figures;
    this.figure;
    this.nextFigure;
    this.cells = this.freeCells();
    this.setPoints();
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
    this.addMoveEvent();
    this.figure = this.generateFigure();

    this.nextFigure = this.generateFigure();
    this.figure.start();
    this.nextFigure.showSquares();
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
    let figure = null;
    switch (this.selectFigure()) {
      case 'Teewee':
        figure = new Teewee(this);
        break;
      case 'Hero':
        figure = new Hero(this);
        break;
      case 'Smashboy':
        figure = new Smashboy(this);
        break;
      case 'BlueRicky':
        figure = new BlueRicky(this);
        break;
      case 'OrangeRicky':
        figure = new OrangeRicky(this);
        break;
      case 'ClevelandZ':
        figure = new ClevelandZ(this);
        break;
      case 'RodhelIslandZ':
        figure = new RodhelIslandZ(this);
        break;
      default:
        figure = new Smashboy(this);
        break;
    }
    return figure;
  };

  savePositions(positions) {
    positions.forEach(position => this.cells[position.y][position.x] = 1);
  };

  next(positions) {
    this.savePositions(positions);
    this.figure = this.nextFigure;

    this.nextFigure = this.generateFigure();
    this.figure.start();
    this.frame.restoreState();
    this.nextFigure.showSquares();
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
      if (position.y >= 0) {
        if (this.cells[position.y][position.x - 1] != 0) {
          free = false;
        };
      };
    })
    return free;
  };

  checkRightCells(positions) {
    let free = true;
    positions.forEach(position => {
      if (position.y >= 0) {
        if (this.cells[position.y][position.x + 1] != 0) {
          free = false;
        };
      };
    })
    return free;
  };
};

export default Game;