
// VARIABLES
var buttonEl = document.querySelector(".start-button");
var quizEl = document.querySelector(".quiz");
var timerEl = document.querySelector(".timer");
var infoEl = document.querySelector(".info");
var answerButtonEl = document.getElementById("AnsBtn");
var questionEl = document.querySelector(".questions");
var timer = 25;
var currentQuestion = 0;
var correctAnswers = []


// QUESTIONS AS OBJECTS
const questionArr = [
  {
    Q: "What is the tag used in HTML that identifies a javascript file?",
    // Another object within contains the answers and lets us denote the correct answer
    A: [
      { answer: "script", correct: false },
      { answer: "run", correct: false },
      { answer: "java", correct: false },
      { answer: "JSON", correct: false }
    ]
  },

  {
    Q: "What is the DOM used for?",
    A: [
      { answer: "Setting dominant values", correct: false },
      { answer: "Debugging a webpage", correct: false },
      { answer: "Selecting elements within the HTML file", correct: true },
      { answer: "Saving user information", correct: false }
    ]
  },

  {
    Q: "What does  event.preventDefault() do?",
    A: [
      { answer: "Discards CSS styling inherent to the web browser.", correct: false },
      { answer: "Stops the web page from refreshing when a submit button is clicked.", correct: true },
      { answer: "Stops multiple eventlistners from executing when an element is clicked.", correct: false },
      { answer: "Prevents keyboard input.", correct: false }
    ]
  },

  {
    Q: "How might one make a site persistant for the user?",
    A: [
      { answer: "By using cookies.", correct: false },
      { answer: "By saving information to a data server.", correct: false },
      { answer: "By using localStorage.", correct: false },
      { answer: "All of these", correct: true }
    ]
  },
  // Get a different question this worded weird
  {
    Q: "What is the syntax of a function in javascript?",
    A: [
      { answer: "'name' function:", correct: false },
      { answer: "function 'name'[] ()", correct: false },
      { answer: "function 'name'(){}", correct: true },
      { answer: "function-'name';", correct: false }
    ]
  },


  {
    Q: "Where should the javascript be linked in an HTML file?",
    A: [
      { answer: "In the footer", correct: false },
      { answer: "In the head/body", correct: true },
      { answer: "After the body", correct: false },
      { answer: "In the CSS", correct: false }
    ]
  },

  {
    Q: "How might one change or add CSS properties within the script file?",
    A: [
      { answer: ".propagateCSS", correct: false },
      { answer: ".setStyle", correct: false },
      { answer: ".setAttribute", correct: true },
      { answer: ".overwriteCSS", correct: false }
    ]
  },


  {
    Q: "Which of these is used to grab an element within the DOM?",
    A: [
      { answer: ".querySelector", correct: true },
      { answer: ".documentID", correct: false },
      { answer: ".getQuery", correct: false },
      { answer: "let", correct: false }
    ]
  },


  {
    Q: "What is console.log() useful for?",
    A: [
      { answer: "Running functions", correct: false },
      { answer: "Debugging", correct: true },
      { answer: "Looking through locally stored files", correct: false },
      { answer: "Searching for code definitions", correct: false }
    ]
  },

  {


    Q: "Free Question",
    A: [
      { answer: "Not this one", correct: false },
      { answer: "No", correct: false },
      { answer: "Click me!", correct: true },
      { answer: "This is not the answer", correct: false }
    ]
  }
];


// GENERATE QUESTIONS

// allows us to sort the question array by random numbers so that we can shuffle the order of the questions
/*function shuffleQuestions() {
  let output =questionArr.sort(function (){
    (Math.random()-0.5)
  })
return output;
}*/


function startQuiz() {
  shuffleQuestions = questionArr.sort(() => Math.floor(Math.random()-0.5))
  currentQuestion = 0;
  nextQuestion();
};

function nextQuestion() {
  reset();
  displayQuestion(shuffleQuestions[currentQuestion])
}


function displayQuestion(question) {
  questionEl.innerText = question.Q;
  question.A.forEach(answer => {
    var button = document.createElement('button')
    button.innerHTML = answer.answer
    button.classList.add('Abutton')
    if (answer.correct) {
      correctAnswers.join(answer.correct)
    }
    answerButtonEl.addEventListener('click', selectAnswer)
    answerButtonEl.appendChild(button)
  })
}

function reset() {
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild)
  }
}

function selectAnswer(event) {
  var selectButton = (event.target)
  var correct = selectButton.dataset.correct
  checkCorrect(event);
  Array.from(answerButtonEl.children).forEach(button => {

  })

function checkCorrect (event) {
  if (event.target === correctAnswers) {
    currentQuestion++
  }
  
    
  }
}


function correctAnswer() {
  for (i = 0; i<= (questionArr(A).length); i++) {
    if(correct) {

    }
  }
}



// TIMER
timerEl.textContent = timer
// calls the function early so there's no delay when the button is clicked
function noDelaySetInterval(func, interval) {
  func();
  return setInterval(func, interval);
}

// Timer function
function countdown() {
  var timeInterval = noDelaySetInterval(function () {
    timer--;
    timerEl.textContent = timer;
    if (timer === 0) {
      clearInterval(timeInterval);

    }
  }, 1000);
}

//START BUTTON
buttonEl.addEventListener("click", function () {
  countdown();
  startQuiz();
  buttonEl.style = "display: none;";
  if (timer === 0) {
    clearInterval()

  }
  if (timer === 0) {
    buttonEl.textContent = "Start"
  }
});
