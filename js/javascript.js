import Map from "../class/Map.js"
import Game from "../class/Game.js";

//Variables
const centerContainer = document.getElementById('center-container');
const canvas = document.getElementById('game');
const score = document.getElementById('score');

const figures = ['Hero', 'Smashboy', 'Teewee', 'OrangeRicky', 'BlueRicky', 'ClevelandZ', 'RodhelIslandZ'];

const map = new Map(canvas);

// let s;
// let points = 0;
// let combo = 1;

//Basic

let widthContainer = '70vw';
let heightContainer = '70vh';

function sizeContainer(container) {
	container.style.width = widthContainer;
	container.style.height = heightContainer;
}

function start() {
	const game = new Game(map, score, figures);
	game.start();
}

window.start = start;

//Calls
sizeContainer(centerContainer);