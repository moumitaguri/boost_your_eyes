const givenTime = prompt("enter time interval");

const colors = ["red", "blue", "yellow", "green"];

let score = 0;
let pseudoColorIndex = 0;

const getColorName = function (event) {
  let id = event.target.id;
  getScore(id, colors[pseudoColorIndex]);
  colorIndex = Math.floor(Math.random() * 4);
  pseudoColorIndex = Math.floor(Math.random() * 4);
  document.getElementById("colorName").innerText = colors[colorIndex].toUpperCase();
  document.getElementById("colorName").style.color = colors[pseudoColorIndex];
}

const getScore = function (id, color) {

  if (id == color) {
    score += 10;
    document.getElementById("score").innerText = score;
    console.log(score);
  }
  if (id != color) {
    score -= 10;
    document.getElementById("score").innerText = score;
  }
}

let timeCount = 0;
let timeOut = setInterval(() => {
  if (timeCount == givenTime || score < 0) {
    clearInterval(timeOut);
    window.confirm("Game Over" + "\n  score is :" + score + "\nplay again?")
    location.reload();
  }
  timeCount++;
}, 1000)