// Global variables

var timerCountdown = document.getElementById("timer");

var startContainer = document.querySelector(".start-container"); 
var startBtn = document.querySelector(".start-button #start");
var quizContainer = document.querySelector(".quiz-container"); 

var endContainer = document.querySelector(".end-container");
var timesUp = document.querySelector(".end-container .heading"); 

var answerMessage = document.querySelector(".quiz-container .correctIncorrect");

var scoreResult = document.querySelector(".end-container .message");

var highscoreName = document.querySelector(".end-container #name");
var submitBtn = document.querySelector(".end-container #submit-btn");

var scoresBoardName = document.getElementById("saved-name");
var scoresBoardResult = document.getElementById("saved-result");
//if Start Button Clicked, the quiz and countdown is started

startBtn.addEventListener("click", function() {
    countdown(); //run countdown function
    startContainer.setAttribute("style",  "display: none");
    quizContainer.setAttribute("style",  "display: flex");
    getQuestions(0);
});

// Functions

var timeLeft = 75;
var timeInterval;
function countdown() { 
  //`setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    timeLeft--;
    timerCountdown.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
      saveHighscore();
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

  optionsBtn1.setAttribute("style", "background-color: none");
  optionsBtn2.setAttribute("style", "background-color: none");
  optionsBtn3.setAttribute("style", "background-color: none");
  optionsBtn4.setAttribute("style", "background-color: none");
  answerMessage.textContent = "";

}

//If answer is clicked, move onto the next question:

var optionsBtn = document.getElementsByClassName("option");
var optionsBtn1 = document.getElementById("1");
var optionsBtn2 = document.getElementById("2");
var optionsBtn3 = document.getElementById("3");
var optionsBtn4 = document.getElementById("4");

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
      timeLeft = timeLeft - 8;
      console.log(event.target);
    };
  // move onto next question
  // when questions end, show last page 
    setTimeout(function(){
      if (questionsNum < questionArr.length - 1) {
        questionsNum ++;
        getQuestions(questionsNum);
  
      } else {
        quizContainer.setAttribute("style",  "display: none");
        endContainer.setAttribute("style",  "display: flex");
        clearInterval(timeInterval);
        timerCountdown.textContent = "Time left: --";
        scoreResult.textContent = "Your final score is: " + timeLeft;
        saveHighscore();
      };
    }, 500);
  })
};

//calc highscore

function saveHighscore() {
  // if submit button clicked
  submitBtn.addEventListener("click", function() {
  event.preventDefault();

  localStorage.setItem("latestScore", timeLeft);
  localStorage.setItem("latestName", highscoreName.value);
  var savedScore = localStorage.getItem("latestScore");
  var savedName = localStorage.getItem("latestName");

  console.log(highscoreName.value);

  if (highscoreName.value = null) {
    console.log("Please enter name");
  } else {
    console.log(savedName + savedScore);

    var liName = document.createElement("li");
    liName.textContent = savedName;

    var liScore = document.createElement("li");
    liScore.textContent = savedScore;

    scoresBoardResult.appendChild(liScore);
    scoresBoardName.appendChild(liName);
  }
});
}


