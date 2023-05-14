let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();

const randomMove = () =>{
    const moves = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return moves[randomNum];
};
const capitaliseFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

const win = (userMove, computerMove) => {
    const userChoice_div = document.getElementById(userMove);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseFirstLetter(userMove)}${smallUserWord} beats ${capitaliseFirstLetter(computerMove)}${smallCompWord}, you win!`;
    // animate the user's move
    userChoice_div.classList.add('green-glow'); // classList is an array of all the classes of the element, add a class to the array
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300); // remove the class after 300ms
};

const lose = (userMove, computerMove) => {
    const userChoice_div = document.getElementById(userMove);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseFirstLetter(computerMove)}${smallCompWord} beats ${capitaliseFirstLetter(userMove)}${smallUserWord}, you lose!`;
    // animate the user's move
    userChoice_div.classList.add('red-glow'); // classList is an array of all the classes of the element, add a class to the array
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300); // remove the class after 300ms
};

const tie = (userMove, computerMove) => {
    const userChoice_div = document.getElementById(userMove);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseFirstLetter(userMove)}${smallUserWord} ties with ${capitaliseFirstLetter(computerMove)}${smallCompWord}, it's a tie!`;
    // animate the user's move
    userChoice_div.classList.add('grey-glow'); // classList is an array of all the classes of the element, add a class to the array
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300); // remove the class after 300ms
}

const game = (userMove) => {
    // console.log("user move: " + userMove);
    let computerMove = randomMove();
    switch (userMove + computerMove){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userMove, computerMove);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userMove, computerMove);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userMove, computerMove);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', ()=> game("paper"));
    scissors_div.addEventListener('click', ()=> game("scissors"));
}

main();