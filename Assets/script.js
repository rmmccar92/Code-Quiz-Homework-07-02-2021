
// VARIABLES
var buttonEl = document.querySelector(".button");
var quizEl = document.querySelector(".quiz");
var timerEl = document.querySelector(".timer");
var infoEl = document.querySelector(".info");
var questionEl = document.querySelector(".question");
var timer = 25;



// QUESTIONS AS OBJECTS
const questionArr = [
  {
    Q: "What is the tag used in HTML that identifies a javascript file?",
    // Another object within contains the answers and lets us denote the correct answer
    Answers: [
      { A: "<script>", correct : true },
      { B: "<run>", correct : false },
      { C: "<java>", correct : false },
      { D: "<JSON>", correct : false }
    ]
  },

  {
    Q: "What is the DOM used for?",
    Answers: [
      { A: "Setting dominant values", correct : false },
      { B: "Debugging a webpage", correct : false },
      { C: "Selecting elements within the HTML file", correct :true },
      { D: "Saving user information", correct : false }
    ]
  },

  {
    Q: "What does  event.preventDefault() do?",
    Answers: [
      { A: "Discards CSS styling inherent to the web browser.", correct : false },
      { B: "Stops the web page from refreshing when a submit button is clicked.", correct : true },
      { C: "Stops multiple eventlistners from executing when an element is clicked.", correct : false },
      { D: "Prevents keyboard input.", correct : false }
    ]
  },

  {
    Q: "How might one make a site persistant for the user?",
    Answers: [
      { A: "By using cookies.", correct : false },
      { B: "By saving information to a data server.", correct : false },
      { C: "By using localStorage.", correct : false },
      { D: "All of these", correct : true }
    ]
  },
  // Get a different question this worded weird
  {
    Q: "What is the syntax of a function in javascript?",
    Answers: [
      { A: "'name' function:", correct : false },
      { B: "function 'name'[] ()", correct : false },
      { C: "function 'name'(){}", correct : true },
      { D: "function-'name';", correct : false }
    ]
  },

  {
    Q: "Where should the javascript be linked in an HTML file?",
    Answers: [
      { A: "In the footer", correct : false },
      { B: "In the head/body", correct : true },
      { C: "After the body", correct : false },
      { D: "In the CSS", correct : false }
    ]
  },

  {
    Q: "How might one change or add CSS properties within the script file?",
    Answers: [
      { A: ".propagateCSS", correct : false },
      { B: ".setStyle", correct : false },
      { C: ".setAttribute", correct : true },
      { D: ".overwriteCSS", correct : false }
    ]
  },

  {
    Q: "Which of these is used to grab an element within the DOM?",
    Answers: [
      { A: ".querySelector", correct : true },
      { B: ".documentID", correct : false },
      { C: ".getQuery", correct : false },
      { D: "let", correct : false }
    ]
  },

  {
    Q: "What is console.log() useful for?",
    Answers: [
      { A: "Running functions", correct : false },
      { B: "Debugging", correct : true },
      { C: "Looking through locally stored files", correct : false },
      { D: "Searching for code definitions", correct : false }
    ]
  },

  {
    Q: "Free Question",
    Answers: [
      { A: "Not this one", correct : false },
      { B: "No", correct : false },
      { C: "Click me!", correct : true },
      { D: "This is not the anser", correct : false }
    ]
  }

]; 

console.log(questionArr)

console.log(questionArr.Answers)

function displayQuestions() {
  questionEl.innerText = questionArr.question
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
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = noDelaySetInterval(function () {
    timer--;
    timerEl.textContent = timer;
    if (timer === 0) {
      clearInterval(timeInterval);

    }
  }, 1000);
}

// BUTTON
buttonEl.addEventListener("click", function () {
  countdown();
  buttonEl.style = "display: none;";
  displayQuestions();
  if (timer === 0) {
    clearInterval()

  }
  if (timer === 0) {
    buttonEl.textContent = "Start"
  }
});
