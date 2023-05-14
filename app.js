const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const randomMove = () =>{
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0: // randomNum === 0
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};