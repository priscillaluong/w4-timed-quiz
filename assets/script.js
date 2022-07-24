// Global variables

var timerCountdown = document.getElementById("timer");

var startContainer = document.querySelector(".start-container"); 
var startBtn = document.querySelector(".start-button #start");
var quizContainer = document.querySelector(".quiz-container"); 

var endContainer = document.querySelector(".end-container");
var timesUp = document.querySelector(".end-container .heading"); 

var answerMessage = document.querySelector(".quiz-container .correctIncorrect");

//if Start Button Clicked, the quiz and countdown is started

startBtn.addEventListener("click", function() {
    countdown(); //run countdown function
    startContainer.setAttribute("style",  "display: none");
    quizContainer.setAttribute("style",  "display: flex");
    getQuestions(0);
});

// Functions

function countdown() { 
  var timeLeft = 1000;
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

  answerText1 = document.getElementById("1"); 
  var option1 = questionArr[index].options[0];
  answerText1.textContent = option1;

  answerText2 = document.getElementById("2"); 
  var option2 = questionArr[index].options[1];
  answerText2.textContent = option2;

  answerText3 = document.getElementById("3"); 
  var option3 = questionArr[index].options[2];
  answerText3.textContent = option3;

  answerText4 = document.getElementById("4"); 
  var option4 = questionArr[index].options[3];
  answerText4.textContent = option4;
}

//If answer is clicked, move onto the next question:

var optionsBtn = document.getElementsByClassName("option");
// loop through collection of elements and addEventListener doesn't
//work through array-like objects

/* if (optionsBtn) {
  for (var i = 0; optionsBtn.length; i++) {
  optionsBtn[i].addEventListener('click', nextQue);
  console.log(event.target.innerText);
};
} */
var questionsNum = 0;

for (var i = 0; optionsBtn.length; i++) 
{
  optionsBtn[i].addEventListener('click', function() 
  {
  var userClicked = event.target.innerText;
  var correctAnswer = questionArr[questionsNum].answer;

  if (userClicked === correctAnswer) 
  {
    answerMessage.textContent = "Correct! ✅";
    event.target.setAttribute("style", "background-color: #5BF873");
    console.log(event.target);
  } else {
    answerMessage.textContent = "Incorrect!	❌";
    event.target.setAttribute("style", "background-color: #FC6262");
/*     highlight(); */
    console.log(event.target);
  };

  if (questionsNum < questionArr.length - 1) {
    questionsNum ++;
    getQuestions(questionsNum);
  } else {
    quizContainer.setAttribute("style",  "display: none");
    endContainer.setAttribute("style",  "display: flex");
  }
  })
};
event.target.setAttribute("style", "background-color: none");
/* function highlight() {
  for (var i = 0; optionsBtn.length; i++) {
    if (optionsBtn[i].innerHTML === correctAnswer) {
      optionsBtn[i].setAttribute("style",  "background-color: #5BF873");
    };
  };
}; */



// move onto next question and if answer was correct, display correct
//if incorrect, display incorrect

/* var questionsNum = 0;

function nextQue() {
  questionsNum ++;
  getQuestions(questionsNum);
}; */