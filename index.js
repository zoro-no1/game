let userResult = 0;
let pcRuselt = 0;

let choice = document.querySelectorAll(".choice");
const pcChoice = () => {
  const pcChoices = ["Rock", "Paper", "scissor"];
  let random = Math.floor(Math.random() * 3);

  return pcChoices[random];
};
let userScore = document.querySelector("#user");
let computer = document.querySelector("#pc");
let score = document.querySelector("#score");

const winner = (win) => {
  if (win) {
    score.innerHTML = "You Win";
    score.style.background = "green";
    userResult++;
    userScore.innerHTML = userResult;
  } else {
   
    score.style.border  = "non";
    score.style.background = "red";
    pcRuselt++;
    computer.innerHTML = pcRuselt;
    score.innerHTML = "You Lose ";
  }
};
const userChoice = (i) => {
  let pc = pcChoice();

  if (pc === i) {
    score.innerHTML = "Draw";
  } else {
    let youwin = true;
    if (pc == "Rock") {
      youwin = i == "Paper" ? true : false;
      youwin = i == "scissor" ? false : true;
    } else if (pc == "Paper") {
      youwin = i == "Rock" ? false : true;
      youwin = i == "scissor" ? true : false;
    } else {
      youwin = i == "Rock" ? true : false;
      youwin = i == "Paper" ? false : true;
    }
    winner(youwin);
  }
};
choice.forEach((i) => {
  i.addEventListener("click", () => {
    let a = i.getAttribute("id");
    userChoice(a);
  });
});
