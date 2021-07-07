var highscoreEl = document.querySelector('.score-list');
var nameEl = document.querySelector('.name-list')
var userName = localStorage.getItem('name')
var highscore = localStorage.getItem('score');



// This function is used on the highscore page to display the score from local storage
function displayScores() {
    highscoreEl.textContent=highscore
    nameEl.textContent= userName;
    if (highscore === 0) {
        highscoreEl.textContent = "";
        nameEl.textContent = "";
    }
}


displayScores();