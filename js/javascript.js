import Map from "../class/Map.js"
import Hero from "../class/Hero.js";
import Smashboy from "../class/Smashboy.js";
import Teewee from "../class/Teewee.js";
import OrangeRicky from "../class/OrangeRicky.js";
import BlueRicky from "../class/BlueRicky.js";
import ClevelandZ from "../class/ClevelandZ.js";
import RodhelIslandZ from "../class/RodheIslandZ.js";

//Variables
const centerContainer = document.getElementById('center-container');
const canvas = document.getElementById('game');
const score = document.getElementById('score');
const figures = ['Hero', 'Smashboy', 'Teewee', 'OrangeRicky', 'BlueRicky', 'ClevelandZ', 'RodhelIslandZ'];
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
	return figures[i];
};

function generateFigure() {
	let s;
	switch (selectFigure()) {
		case 'Teewee':
			s = new Teewee(map);
			break;
		case 'Hero':
			s = new Hero(map);
			break;
		case 'Smashboy':
			s = new Smashboy(map);
			break;
		case 'BlueRicky':
			s = new BlueRicky(map);
			break;
		case 'OrangeRicky':
			s = new OrangeRicky(map);
			break;
		case 'ClevelandZ':
			s = new ClevelandZ(map);
			break;
		case 'RodhelIslandZ':
			s = new RodhelIslandZ(map);
			break;
		default:
			s = new Smashboy(map);
			break;
	}
	s.start();
}

function start() {
	generateFigure();
}

//Calls
sizeContainer(centerContainer);
setPoints();

start();