let playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  let getComputerChoice = () => {
    let numAl = Math.random();
    if (numAl <= 0.3) {
      return "Pierre";
    } else if (numAl >= 0.6) {
      return "Papier";
    } else {
      return "Ciseaux";
    }
  };

  let getHumanChoice = () => {
    let a = prompt("Pierre, Papier, Ciseaux ?");
    let txtH = a.toLowerCase();
    if (txtH === "pierre") {
      return "Pierre";
    } else if (txtH === "papier") {
      return "Papier";
    } else if (txtH === "ciseaux") {
      return "Ciseaux";
    } else {
      confirm("Se n'est pas se qui a été demander");
      return getHumanChoice();
    }
  };

  let playRound = () => {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (humanChoice === "Pierre" && computerChoice === "Pierre") {
      console.log(
        `Execo "Pierre"!\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
    } else if (humanChoice === "Pierre" && computerChoice === "Papier") {
      computerScore++;
      console.log(
        `Computer Win!\n Vous avez fait "${humanChoice}" et l'ordinateur "${computerChoice}"\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
      return computerScore;
    } else if (humanChoice === "Pierre" && computerChoice === "Ciseaux") {
      humanScore++;
      console.log(
        `Human Win!\n Vous avez fait "${humanChoice}" et l'ordinateur "${computerChoice}"\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
      return humanScore;
    } else if (humanChoice === "Papier" && computerChoice === "Papier") {
      console.log(
        `Execo "Papier"!\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
    } else if (humanChoice === "Papier" && computerChoice === "Pierre") {
      humanScore++;
      console.log(
        `Human Win!\n Vous avez fait "${humanChoice}" et l'ordinateur "${computerChoice}"\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
      return humanScore;
    } else if (humanChoice === "Papier" && computerChoice === "Ciseaux") {
      computerScore++;
      console.log(
        `Computeur Win!\n Vous avez fait "${humanChoice}" et l'ordinateur "${computerChoice}"\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
      return computerScore;
    } else if (humanChoice === "Ciseaux" && computerChoice === "Ciseaux") {
      console.log(
        `Execo "Ciseaux"!\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
    } else if (humanChoice === "Ciseaux" && computerChoice === "Pierre") {
      computerScore++;
      console.log(
        `Computer Win!\n Vous avez fait "${humanChoice}" et l'ordinateur "${computerChoice}"\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
      return computerScore;
    } else if (humanChoice === "Ciseaux" && computerChoice === "Papier") {
      humanScore++;
      console.log(
        `Human Win!\n Vous avez fait "${humanChoice}" et l'ordinateur "${computerChoice}"\n Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
      return humanScore;
    } else {
      console.log(
        `Voici les score: Human:${humanScore}, Computeur:${computerScore}`
      );
    }
  };

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (humanScore > computerScore) {
    console.log(
      `Vous gagnez le jeu avec un score de ${humanScore} contre ${computerScore}!`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `L'ordinateur gagne le jeu avec un score de ${computerScore} contre ${humanScore}!`
    );
  } else {
    console.log(
      `Le jeu se termine par un match nul avec un score de ${humanScore} à ${computerScore}!`
    );
  }
};

playGame();
