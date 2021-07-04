var highscoreEl = document.querySelector('.score-list');
var nameEl = document.querySelector('.name')

function displayScores() {
    var highscore = localStorage.getItem('score');
    highscoreEl.textContent=highscore
    var name = localStorage.getItem('name')
    nameEl.textContent=name;
}

displayScores();