var buttonEl = document.querySelector(".start-button");
var quizEl = document.querySelector(".quiz");
var timerEl = document.querySelector(".timer");
var infoEl = document.querySelector(".info");
var answerButtonEl = document.getElementById("AnsBtn");
var questionEl = document.querySelector(".questions");
var answerEl = document.querySelector(".answers");
var scoreEl = document.querySelector(".score");
var gameOverEl = document.querySelector(".gameover");
var highscoreEl = document.querySelector(".highscore");
var score = 0;
var timer = 180;
var gameOverRunning = false;
var deduction = 10
var currentQuestion = 0;
var answerStatus;
var timeInterval;
//  Question Array as an object to contain the questions answers and correct answer
var questionArr = [

    {
        Q: "What is the tag used in HTML that identifies a javascript file?",
        // Another object within contains the answers and lets us denote the correct answer
        A: [
            "script",
            "run",
            "java",
            "JSON",
        ],
        correct: "script"
    },

    {

        Q: "What is the DOM used for?",
        A: [
            "Setting dominant values",
            "Debugging a webpage",
            "Selecting elements within the HTML file",
            "Saving user information",
        ],
        correct: "Selecting elements within the HTML file"
    },

    {

        Q: "What does  event.preventDefault() do?",
        A: [
            "Discards CSS styling inherent to the web browser.",
            "Stops the web page from refreshing when a submit button is clicked.",
            "Stops multiple eventlistners from executing when an element is clicked.",
            "Prevents keyboard input.",
        ],
        correct: "Stops the web page from refreshing when a submit button is clicked."
    },

    {
        Q: "How might one make a site persistant for the user?",
        A: [
            "By using cookies.",
            "By saving information to a data server.",
            "By using localStorage.",
            "All of these",
        ],
        correct: "All of these"
    },
 
    {

        Q: "What is the syntax of a function in javascript?",
        A: [
            "'name' function:",
            "function 'name'[] ()",
            "function 'name'()",
            "function-'name';",
        ],
        correct: "function 'name'()"
    },


    {

        Q: "Where should the javascript be linked in an HTML file?",
        A: [
            "In the footer",
            "In the head/body",
            "After the body",
            "In the CSS",
        ],
        correct: "In the head/body"
    },

    {

        Q: "How might one change or add CSS properties within the script file?",
        A: [
            ".propagateCSS",
            ".setStyle",
            ".setAttribute",
            ".overwriteCSS",
        ],
        correct: ".setAttribute"
    },


    {

        Q: "Which of these is used to grab an element within the DOM?",
        A: [
            ".querySelector",
            ".documentID",
            ".getQuery",
            "let",
        ],
        correct: ".querySelector"
    },


    {

        Q: "What is console.log() useful for?",
        A: [
            "Running functions",
            "Debugging",
            "Looking through locally stored files",
            "Searching for code definitions",
        ],
        correct: "Debugging"
    },

    {

        Q: "Free Question",
        A: [
            "Not this one",
            "No",
            "Click me!",
            "This is not the answer"
        ],
        correct: "Click me!"
    }
];

function startQuiz() {
    shuffle(questionArr);
    displayQuestion();
};

// function to shuffle the question order
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// 
function displayQuestion() {
    questionEl.innerHTML = ""
    answerButtonEl.innerHTML = ""
    // This allows us to end the quiz when questions are exhausted
    var end = questionArr.length - 1
    if (currentQuestion > end) {
        gameOver2();
        return;
    }
    // Plucking the Questions and answers from the shuffled questionArr and setting them to display on the page 
    for (i = 0; i <= questionArr.length; i++) {
        var newQuestion = questionArr[currentQuestion].Q;
        var newAnswers = questionArr[currentQuestion].A;
        questionEl.innerHTML = newQuestion
    }
    // The answers need a forEach to loop through the number of answers within the object and then append each to a button on the page
    newAnswers.forEach(function (button) {
        var answer = document.createElement('button');
        answer.innerHTML = button
        answer.classList.add('Abutton')
        answerEl.appendChild(answer)
        answer.addEventListener('click', (checkCorrect));
    })

}

function checkCorrect(e) {
    // e.target is what we clicked on the page
    var event = e.target;
    // if the text of the clicked element matches the text of the defined correct answer within the questionArr at the current question then advance the qustion and set the answerstatus to true which is used for scoring and deduction.
    if (event.innerHTML === questionArr[currentQuestion].correct) {
        currentQuestion++
        displayQuestion();
        answerStatus = true;
        // this just makes the score a little more varied by taking the timer into account
        score += ((currentQuestion + 1) + (Math.floor(timer / 10)));
        scoreEl.textContent = "Score: " + score;
    }
    else {
        //Likewise setting the answer to false and deducting time 
        answerStatus = false;
        timer -= deduction;
    }
};
// SCORE
scoreEl.textContent = "Score: " + score;

// When called this function will save the current score on the machine for later use
function setScore() {
    localStorage.setItem('score', score);
}


// TIMER

// calls the function early so there's no delay when the button is clicked
function noDelaySetInterval(func, interval) {
    func();
    return setInterval(func, interval);
}

// Timer function
function countdown(timeInterval) {
    var timeInterval = noDelaySetInterval(function () {
        timer--;
        timerEl.textContent = timer;
        if (timer <= 0) {
            timerEl.textContent === 0
            clearInterval(timeInterval);
            gameOver();
        }
        if (gameOverRunning) {
            clearInterval(timeInterval);
        }
    }, 1000);
}
// two gameover functions to differentiate between question exhaustion and time exhaustion
function gameOver() {
    var gameOverText = "Time's Up!";
    quizEl.classList.add('game-over')
    quizEl.innerHTML = gameOverText;
    setScore();
    // name entered will be saved in local storage
    var userName = prompt("Please Enter Your Name. You can check your score below on the highscores page.");
    localStorage.setItem('name', userName);
}


function gameOver2() {
    gameOverRunning = true
    var gameOverText = "The End!";
    quizEl.classList.add('game-over')
    quizEl.innerHTML = gameOverText;
    setScore();
    var userName = prompt("Please Enter Your Name. You can check your score below on the highscores page.");
    localStorage.setItem('name', userName);   
}


// The event listener that calls the functions that run the quiz and hides the start button
buttonEl.addEventListener("click", function () {
    countdown();
    startQuiz();
    buttonEl.style.display = "none"
});