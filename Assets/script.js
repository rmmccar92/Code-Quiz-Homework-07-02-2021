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
var questionArr = [
    // Clear
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
        // Clear
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
        // Clear
        Q: "What does  event.preventDefault() do?",
        A: [
            "Discards CSS styling inherent to the web browser.",
            "Stops the web page from refreshing when a submit button is clicked.",
            "Stops multiple eventlistners from executing when an element is clicked.",
            "Prevents keyboard input.",
        ],
        correct: "Stops the web page from refreshing when a submit button is clicked."
    },
    // Clear
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
    // Get a different question this worded weird
    {
        // Clear
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
        // Clear
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
        // Clear
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
        // Clear
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
        // Clear
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
        // Clear

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
    timerEl.textContent = timer
    currentQuestion = 0;
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


function displayQuestion() {
    questionEl.innerHTML = ""
    answerButtonEl.innerHTML = ""
    var end = questionArr.length - 1
    if (currentQuestion > end) {
        gameOver2();
        return;
    }
    for (i = 0; i <= questionArr.length; i++) {
        var newQuestion = questionArr[currentQuestion].Q;
        var newAnswers = questionArr[currentQuestion].A;
        questionEl.innerHTML = newQuestion
    }
    newAnswers.forEach(function (button) {
        var answer = document.createElement('button');
        answer.innerHTML = button
        answer.classList.add('Abutton')
        answerEl.appendChild(answer)
        answer.addEventListener('click', (checkCorrect));
    })

}

function checkCorrect(e) {
    var event = e.target;

    if (event.innerHTML === questionArr[currentQuestion].correct) {
        currentQuestion++
        displayQuestion();
        console.log("Correct");
        answerStatus = true;
        score +=((currentQuestion +1) + (Math.floor(timer/10)));
        scoreEl.textContent = "Score: " + score;
    }
    else {
        // the deduction of time isn't obvious without some kind of animation
        answerStatus = false;
        timer -= deduction;
    }
};
// SCORE
scoreEl.textContent = "Score: " + score;

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
        if (timer === 0) {
            clearInterval(timeInterval);
            gameOver();
        }
        if (gameOverRunning) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

function gameOver() {
    var gameOverText = "Time's Up!";
    quizEl.classList.add('game-over')
    quizEl.innerHTML = gameOverText;
    setScore();
    var name = prompt("Please Enter Your Name. You can check your score below on the highscores page.");
    localStorage.setItem('name', name);
}

function gameOver2() {
    gameOverRunning = true
    var gameOverText = "The End!";
    quizEl.classList.add('game-over')
    quizEl.innerHTML = gameOverText;
    setScore();
    var name = prompt("Please Enter Your Name. You can check your score below on the highscores page.");
    localStorage.setItem('name', name);
}



buttonEl.addEventListener("click", function () {
    countdown();
    startQuiz();
});