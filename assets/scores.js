var clearBtn = document.getElementById("clear");

var savedScores = JSON.parse(localStorage.getItem("highscores"))|| [];
savedScores.sort(function(a, b) {
    return (b.score - a.score);

});

for (var i = 0; i < savedScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = savedScores[i].name + " = " + savedScores[i].score;
    var olEl = document.getElementById("saved-result");
    olEl.appendChild(liEl);
};
function clearScores(){
    localStorage.removeItem("highscores");
    window.location.reload();
}
clearBtn.onclick = clearScores;