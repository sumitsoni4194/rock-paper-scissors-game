let userScore = 0;
let compScore = 0;
let msg = document.getElementById("msg");
let userScorePara = document.getElementById("user-score");
let compScorePara = document.getElementById("comp-score");


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerHTML = "Game was draw";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = "You loose.";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  
  // Generate computer choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissor, rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
