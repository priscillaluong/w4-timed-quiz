var clearBtn = document.getElementById("clear");

var savedScores = JSON.parse(localStorage.getItem("highscores"))|| [];
savedScores.sort(function(a, b) {
    return (b.score - a.score);

});

for (var i = 0; i < savedScores.length; i++) {
    var scoreEl = document.createElement("li");
    scoreEl.textContent = savedScores[i].score;
    
    var nameEl = document.createElement("li");
    nameEl.textContent = savedScores[i].name;
    
    var ulEl = document.getElementById("saved-result");
    ulEl.appendChild(scoreEl);

    var olEl = document.getElementById("saved-name");
    olEl.appendChild(nameEl);
};
function clearScores(){
    localStorage.removeItem("highscores");
    window.location.reload();
}
clearBtn.onclick = clearScores;