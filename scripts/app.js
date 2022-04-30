const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
    {
        name: '',
        symbol:"X"
    },
    {
        name: '',
        symbol:"O"
    }
];


const cancelBtn = document.getElementById('cancel-btn');
const submitForm = document.getElementById('submitPlayerConfig');
const errorsOutput = document.getElementById('config-errors');
const startNewGameBtn = document.getElementById('start-game-btn');
const gameArea = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElements = document.querySelector('#game-board');
const activePlayerName = document.getElementById('active-player-name');
const gameoverElement = document.getElementById('game-over');

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');

const editPlayer1Button = document.getElementById('edit-player1-btn');
const editPlayer2Button = document.getElementById('edit-player2-btn');
editPlayer1Button.addEventListener('click', openPlayerConfig);
editPlayer2Button.addEventListener('click', openPlayerConfig);
cancelBtn.addEventListener('click', closePlayerConfig);
submitForm.addEventListener('submit', savePlayerConfig);
startNewGameBtn.addEventListener('click', startNewGame);
gameBoardElements.addEventListener('click', selectGameField);