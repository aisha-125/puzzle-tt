import Map from "../class/Map.js"
import Game from "../class/Game.js";

//Variables
const canvas = document.getElementById('game');
const score = document.getElementById('score');
const startBtn = document.getElementById('start-btn')

const figures = ['Hero', 'Smashboy', 'Teewee', 'OrangeRicky', 'BlueRicky', 'ClevelandZ', 'RodhelIslandZ'];

const map = new Map(canvas);
const game = new Game(map, score, figures);

function start() {
	startBtn.style.display = 'none';
	game.start();
}

window.start = start;