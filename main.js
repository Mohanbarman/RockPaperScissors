// Rock paper scissors game.

let userScore = 0;
let compScore = 0;

const moves = {
  r: "rock",
  p: "paper",
  s: "scissor"
};

const rules = {
  r: "s",
  p: "r",
  s: "p"
};

const compScore_div = document.querySelector(".comp");
const userScore_div = document.querySelector(".user");
let info_div = document.querySelector(".info");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissor_btn = document.getElementById("scissor");

function getComp() {
  const move = ["r", "p", "s"];
  const random = Math.floor(Math.random() * 3);

  return move[random];
}

function checkResult(comp, user) {
  comp_score = Number(compScore_div.innerHTML);
  user_score = Number(userScore_div.innerHTML);

  if (user == comp) {
    info_div.innerHTML = "It's draw";
  } else if (rules[user] == comp) {
    info_div.innerHTML = `Computer choosed ${moves[comp]} You win.`;
    userScore_div.innerHTML = user_score + 1;
  } else {
    info_div.innerHTML = `Computer choosed ${moves[comp]} You lose.`;
    compScore_div.innerHTML = comp_score + 1;
  }
}

rock_btn.addEventListener("click", function() {
  checkResult(getComp(), "r");
});

paper_btn.addEventListener("click", function() {
  checkResult(getComp(), "p");
});

scissor_btn.addEventListener("click", function() {
  checkResult(getComp(), "s");
});
