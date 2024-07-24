import Map from "../class/Map.js"
import Game from "../class/Game.js";

//Variables
const canvas = document.getElementById('game');
const asideCanvas = document.getElementById('nextPiece');
const score = document.getElementById('score');
const startBtn = document.getElementById('start-btn')

const figures = ['Hero', 'Smashboy', 'Teewee', 'OrangeRicky', 'BlueRicky', 'ClevelandZ', 'RodhelIslandZ'];
let squareSize = 40;

// const nextPiece = new Map(canvas);
const frame = new Map(asideCanvas, squareSize);
const map = new Map(canvas, squareSize);
const game = new Game(map, frame, score, figures);

function start() {
	startBtn.style.display = 'none';
	game.start();
}

window.start = start;