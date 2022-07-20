// Global variables

var startBtn = document.querySelector("#start");
var timerEl = document.getElementById('countdown');

// Functions

function countdown() {
  var timeLeft = 5;
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// After start quiz button is clicked the quiz and countdown starts
function startQuiz() {
    countdown();

}

// Displays the message
function displayMessage() {
    timerEl.textContent = "Time's up!";
}

// Add event listener to start button
startBtn.addEventListener("click", countdown);



// HIGHSCORES - can we refer to the increment decrement activity to code this?

if ()



// we may need to use this to carry out another function after a form has been submitted. E.g. print amount
event.preventDefault();

// put each question into an array so we can go through the q's with an index


