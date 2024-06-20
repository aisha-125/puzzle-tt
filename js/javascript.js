import Square from "../class/Square.js";

//Variables
const centerContainer = document.getElementById('center-container');
const score = document.getElementById('score');
const map = document.getElementById('game');
const mctx = map.getContext("2d");
const figures = ['BlueRicky', 'ClevelandZ', 'Hero', 'OrangeRicky', 'RodhelIsland', 'Smashboy', 'Teewee'];

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

function mapGrip(width, height) {
	let squareSize = 40;
	mctx.strokeStyle = "lightblue";
	mctx.lineWidth = 0.5;

	for (let x = squareSize; x <= width; x += squareSize) {
		mctx.beginPath();
		mctx.moveTo(x, 0);
		mctx.lineTo(x, height);
		mctx.stroke();
	}

	for (let y = 0; y <= height; y += squareSize) {
		mctx.beginPath();
		mctx.moveTo(0, y);
		mctx.lineTo(width, y);
		mctx.stroke();
	}
};

function addPoints() {
	points = points + 50 * combo;
	console.log(points);
	setPoints();
	combo*2;
};

function selectFigure() {
	let i = Math.floor(Math.random() * figures.length);
	console.log(figures[i]);
};


//Calls
sizeContainer(centerContainer);
mapGrip(map.width, map.height);

const s = new Square(mctx);
s.drawSquares();

mapGrip(map.width, map.height);


setPoints();

setInterval(s.fall(), 5000);
