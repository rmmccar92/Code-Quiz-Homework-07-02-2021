var highscoreEl = document.querySelector('.score-list');
var nameEl = document.querySelector('.name-list');
var userName = localStorage.getItem('name');
var highscore = localStorage.getItem('score');
var completeScore = {
    highScoreArr: [],
    userNameArr: [],
}

console.log(userName);
console.log(highscore);

// This function is used on the highscore page to display the score from local storage
function displayScores() {
    highscoreEl.textContent = highscore
    nameEl.textContent = userName;
    if (highscore === 0) {
        highscoreEl.textContent = "";
        nameEl.textContent = "";
    }
}
// BUILDING HIGHSCORE ARRAY

function makeScore() {
    completeScore.userNameArr.push(userName);
    completeScore.highScoreArr.push(highscore);
    localStorage.setItem('completeScore', JSON.stringify(completeScore));
}

function displayScore() {
    
    for (i = 0; i < completeScore.userNameArr.length; i++) {
        var nameList = document.createElement('li');
        nameList.append(completeScore.userNameArr[i]);
        nameEl.append(nameList);
        
    }

    for (i = 0; i < completeScore.highScoreArr.length; i++) {
        var scoreList = document.createElement('li');
        scoreList.append(completeScore.highScoreArr[i]);
        highscoreEl.append(scoreList);
    

    }
}

makeScore();
displayScore();


