import Square from "../class/Square.js";
import Map from "../class/Map.js"

//Variables
const centerContainer = document.getElementById('center-container');
const canvas = document.getElementById('game');
const score = document.getElementById('score');
const figures = ['BlueRicky', 'ClevelandZ', 'Hero', 'OrangeRicky', 'RodhelIsland', 'Smashboy', 'Teewee', 'Square'];
const map = new Map(canvas);

let points = 0;
let combo = 1;

//Basic

let widthContainer = '70vw';
let heightContainer = '70vh';

function sizeContainer(container) {
	container.style.width = widthContainer;
	container.style.height = heightContainer;
};

//Game

function setPoints() {
	score.innerText = `${points} points`;
};

function addPoints() {
	points = points + 50 * combo;
	console.log(points);
	setPoints();
	combo * 2;
};

function selectFigure() {
	let i = Math.floor(Math.random() * figures.length);
	console.log(figures[i]);
};

function start() {
	const s = new Square(map);
	s.drawSquares();

	function update() {
    s.fall();
  }
  const interval = setInterval(update, 1000);
	// Poner el interval dentro de la propia clase,
	// en una variable "cayendo" o "stateFall"
}

//Calls
sizeContainer(centerContainer);
map.mapGrip();
map.saveState();

start();
setPoints();