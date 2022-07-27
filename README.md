# w4-timed-quiz

Week Four Challenge of the *UOB Full Stack Development Coding Bootcamp* requires students to use Web APIs to create a **timed multiple-choice quiz**. 

We were given a User Story and an Acceptance Criteria as per below:

User Story:

![User Story](/assets/images/user-story.png) 

Acceptance Criteria:

![Acceptance Criteria](/assets/images/acceptance-crit.png) 

## How I approached the task:

* I started by building the static elements of the quiz within HTML and CSS, ensuring that the code follows a semantic structure. 

* Once the above was satisfied, I used DOM selectors to target certain elements within *index.html*.

* Methods such as **setInterval()** (to call a function to be executed every 1000 milliseconds, in this case, the timer countdown), **addEventListener()**, **setAttribute()**, **localstorage.getItem()**, **.setItem()** etc. were used to create a dynamic quiz that displays different content and has user interaction. 


Code snippet:

```
function saveHighscore() {

  // if submit button clicked, save score 
  submitBtn.addEventListener("click", function() {
  event.preventDefault();

  var savedScores = JSON.parse(localStorage.getItem("highscores")) || [];
  var presentScore = {
    score: timeLeft,
    name: highscoreName.value,
  };
  savedScores.push(presentScore);
  localStorage.setItem("highscores", JSON.stringify(savedScores));
});
}
```

## Screenshot of Deployed Application:

![Deployed Application Screenshot](/assets/images/index.png) 

## Screenshot of Application Interaction:

![Question Correct Screenshot](/assets/images/correct.png)

When the user answers a question incorrectly, 8 seconds is minused from the time left.

![Question Incorrect Screenshot](/assets/images/incorrect.png) 

The users highscore is the time left remaining on the clock after all questions has been answered.

![End of Quiz Screenshot](/assets/images/end-container.png) 

Users are also alerted if they try to submit a score when the name input box is left blank.

![Alert Screenshot](/assets/images/alert.png) 

![Highscores Screenshot](/assets/images/highscores.png)

## URL to Deployed Application:

[Click here](https://priscillaluong.github.io/w4-timed-quiz/) 

### Final note:

*Any feedback to improve code or areas where I could further implement best practice would be greatly appreciated* 😊