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
