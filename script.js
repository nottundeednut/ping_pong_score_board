const player1Btn = document.querySelector("#player1btn");
const player2Btn = document.querySelector("#player2btn");
const resetBtn = document.querySelector("#reset");

const player1Score = document.querySelector("#player1score");
const player2Score = document.querySelector("#player2score");

let score1 = 0;
let score2 = 0;

player1Btn.addEventListener("click", function countScores() {
  score1++;
  player1Score.textContent = score1;
});

player2Btn.addEventListener("click", function countScores() {
  score2++;
  player2Score.textContent = score2;
});

resetBtn.addEventListener("click", function reset() {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
});
