let sPlayer = document.getElementById("sPlayer1");
let mPlayer = document.getElementById("mPlayer2");
let rtnBtn = document.getElementById("rtnBtn");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let lizard = document.getElementById("lizard");
let scissors = document.getElementById("scissors");
let spock = document.getElementById("spock");
let uWins = document.getElementById("uWins");
let cpWins = document.getElementById("cpWins");
let rdCounter = document.getElementById("rdCounter");
let tiCounter = document.getElementById("tiCounter");
let userInput;
let res;



let userCounter = 0;
console.log(userCounter);
let cpuCounter = 0;
console.log(cpuCounter);
let tieCounter = 0;
console.log(tieCounter);
let roundCounter = userCounter + cpuCounter + tieCounter;
console.log(roundCounter) 

rock.addEventListener("click", function () {
  userInput = "rock";
  console.log(userInput);
  console.log(res);
  outCome();
  GetData();
});

paper.addEventListener("click", function () {
  userInput = "paper";
  console.log(userInput);
  console.log(res);
  outCome();
  GetData();
});

lizard.addEventListener("click", function () {
  userInput = "lizard";
  console.log(userInput);
  console.log(res);
  outCome();
  GetData();
});

scissors.addEventListener("click", function () {
  userInput = "scissors";
  console.log(userInput);
  console.log(res);
  outCome();
  GetData();
});

spock.addEventListener("click", function () {
  userInput = "spock";
  console.log(userInput);
  console.log(res);
  outCome();
  GetData();
});


//==================================================================
rock.addEventListener("click", () => {
  uWins.textContent = " User Wins " + userCounter;
})
lizard.addEventListener("click", () => {
  uWins.textContent = " User Wins " + userCounter;
})
paper.addEventListener("click", () => {
  uWins.textContent = " User Wins " + userCounter;
})
scissors.addEventListener("click", () => {
  uWins.textContent = " User Wins " + userCounter;
})
spock.addEventListener("click", () => {
  uWins.textContent = " User Wins " + userCounter;
})

//===================================================================

rock.addEventListener("click", () => {
  cpWins.textContent = " CPU Wins " + cpuCounter;
})
lizard.addEventListener("click", () => {
  cpWins.textContent = " CPU Wins " + cpuCounter;
})
paper.addEventListener("click", () => {
  cpWins.textContent = " CPU Wins " + cpuCounter;
})
scissors.addEventListener("click", () => {
  cpWins.textContent = " CPU Wins " + cpuCounter;
})
spock.addEventListener("click", () => {
  cpWins.textContent = " CPU Wins " + cpuCounter;
})


//===================================================================
rock.addEventListener("click", () => {
  rdCounter.textContent = " Round Counter " + roundCounter;
})
paper.addEventListener("click", () => {
  rdCounter.textContent = " Round Counter " + roundCounter;
})
lizard.addEventListener("click", () => {
  rdCounter.textContent = " Round Counter " + roundCounter;
})
scissors.addEventListener("click", () => {
  rdCounter.textContent = " Round Counter " + roundCounter;
})
spock.addEventListener("click", () => {
  rdCounter.textContent = " Round Counter " + roundCounter;
})

//===================================================================
rock.addEventListener("click", () => {
  tiCounter.textContent = " Tie Counter " + tieCounter;
})
paper.addEventListener("click", () => {
  tiCounter.textContent = " Tie Counter " + tieCounter;
})
scissors.addEventListener("click", () => {
  tiCounter.textContent = " Tie Counter " + tieCounter;
})
lizard.addEventListener("click", () => {
  tiCounter.textContent = " Tie Counter " + tieCounter;
})
spock.addEventListener("click", () => {
  tiCounter.textContent = " Tie Counter " + tieCounter;
})
//===================================================================
function GetData() {
  fetch(
    "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
  )
    .then((response) => response.text())
    .then((data) => {
      res = data;
    });
}

GetData();


function outCome() {
  if (userInput == "rock" && res == "Paper") {
    rtnBtn.textContent = " You Lose, CPU Wins";
    cpuCounter++
    roundCounter++
   
  }
  else if (userInput == "rock" && res == "Spock") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "rock" && res == "Scissors") {
    rtnBtn.textContent = "You win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "rock" && res == "Lizard") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "paper" && res == "Rock") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "paper" && res == "Spock") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "scissors" && res == "Spock") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "scissors" && res == "Rock") {
    rtnBtn.textContent = " You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "siccors" && res == "Paper") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "scissors" && res == "Lizard") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "paper" && res == "Scissors") {
    rtnBtn.textContent = " You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "paper" && res == "Lizard") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "spock" && res == "Paper") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
   
  }
  else if (userInput == "spock" && res == "Lizard") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "spock" && res == "Scissors") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "spock" && res == "Rock") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "lizard" && res == "Scissors") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "Lizard" && res == "Rock") {
    rtnBtn.textContent = "You Lose, CPU Wins"
    cpuCounter++
    roundCounter++
    
  }
  else if (userInput == "lizard" && res == "Spock") {
    rtnBtn.textContent = " You Win, CPU Loses"
    userCounter++
   
  }
  else if (userInput == "lizard" && res == "Paper") {
    rtnBtn.textContent = "You Win, CPU Loses"
    userCounter++
    roundCounter++
    
  }
  else if (userInput == "rock" && res == "Rock") {
    rtnBtn.textContent = "It's A Tie"
    tieCounter++
    roundCounter++
  }
  else if (userInput == "paper" && res == "Paper") {
    rtnBtn.textContent = "It's A Tie"
    tieCounter++
    roundCounter++
    
  }
  else if (userInput == "scissors" && res == "Scissors") {
    rtnBtn.textContent = "It's A Tie"
    tieCounter++
    roundCounter++
  }
  else if (userInput == "lizard" && res == "Lizard") {
    rtnBtn.textContent = "It's A Tie"
    tieCounter++
    roundCounter++
  }
  else if (userInput == "spock" && res == "Spock") {
    rtnBtn.textContent = "It's A Tie"
    tieCounter++
    roundCounter++
  }

}
