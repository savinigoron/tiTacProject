function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameoverElement.firstElementChild.innerHTML =
        'You won <span id="winner-name">PLAYER NAME</span>!';
    gameoverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            gameData[i][k] = 0;
            const gameBoardItemElement = gameBoardElements.children[gameBoardIndex]
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    if (!players[0].name || !players[1].name) {
        alert('Please set custom players names for both players!')
        return;
    }
    resetGameStatus();
    activePlayerName.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}
function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameIsOver) {
        return;
    }
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select empty fields!')
        return;
    }
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    if (winnerId) {
        endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
}
function checkForGameOver() {
    //Checking the rows for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]) {
            return gameData[i][0];
        }
    }
    //Checking the columns foe equality 
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]) {
            return gameData[0][i];
        }
    }
    //Checking diagonal: Top left to right
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }
    //Checking diagonal: Top right to left
    if (gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]) {
        return gameData[0][2];
    }
    if (currentRound === 9) {
        return -1;
    }
    return 0;
}
function endGame(winnerId) {
    gameIsOver = true;
    gameoverElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameoverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameoverElement.firstElementChild.textContent = 'It\'s a draw!';
    }

}