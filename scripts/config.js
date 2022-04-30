function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}
function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    submitForm.firstElementChild.classList.remove('error');
    errorsOutput.textContent = '';
    submitForm.firstElementChild.lastElementChild.value = '';
}
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('username').trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorsOutput.textContent = 'Please enter a valid name!';
        return;
    }
    const updatedPlayerDataElem = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElem.children[1].textContent = enteredPlayerName;
    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();
}