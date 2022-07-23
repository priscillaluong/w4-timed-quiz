// Global variables

var timerCountdown = document.getElementById("timer");

var startContainer = document.querySelector(".start-container"); 
var startBtn = document.querySelector(".start-button #start");
var quizContainer = document.querySelector(".quiz-container"); 

var endContainer = document.querySelector(".end-container");
var timesUp = document.querySelector(".end-container .heading"); 

//if Start Button Clicked, the quiz and countdown is started

startBtn.addEventListener("click", function() {
    countdown(); //run countdown function
    startContainer.setAttribute("style",  "display: none");
    quizContainer.setAttribute("style",  "display: flex");
    getQuestions(0);
    getAnswers();
});

// Functions

function countdown() { 
  var timeLeft = 5;
  //`setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerCountdown.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message
function displayMessage() {
    timesUp.textContent = "Time's up!";
    quizContainer.setAttribute("style",  "display: none");
    endContainer.setAttribute("style",  "display: flex");
}

// Add event listener to start button
startBtn.addEventListener("click", countdown);



// HIGHSCORES - can we refer to the increment decrement activity to code this?

//if ()



// we may need to use this to carry out another function after a form has been submitted. E.g. print amount
//event.preventDefault();

// put each question into an array so we can go through the q's with an index

// Getting questions and answers from array 

function getQuestions(index) {
  questionText = document.querySelector(".quiz-container .question"); 
  var question = questionArr[index].questions;
  questionText.textContent = question;
}

function getAnswers() {
  answerText = document.querySelector(".quiz-container .answers"); 
  var option = '<button class="option">' + questionArr[0].options[0] + '</button>' + '<button class="option">' + questionArr[0].options[1] + '</button>' + '<button class="option">' + questionArr[0].options[2] + '</button>' + '<button class="option">' + questionArr[0].options[3] + '</button>';
  answerText.innerHTML = option;
}

