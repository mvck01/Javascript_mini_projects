
let userScore=0;
let compScore=0;

const userscoreSpan= document.getElementById('userScore');
const compscoreSpan= document.getElementById('computerScore');
const outputMessage= document.querySelector('.outputMessage')
const userChoices= document.querySelector('.choice')
const rockDiv= document.getElementById('r')
const paperDiv= document.getElementById('p')
const scissorsDiv= document.getElementById('s')

const ROCK= 'ROCK'
const PAPER= 'PAPER'
const SCISSORS= 'SCISSORS'
const smallUserWord= 'user'.fontsize(3).sub()
const smallCompWord= 'comp'.fontsize(3).sub()


function getComputerChoice(){
    let arr1=[ROCK, PAPER, SCISSORS]
    let rNumber= Math.floor(Math.random()*arr1.length)
    return arr1[rNumber]
}


function win(playerChoice, computerChoice){
    userScore++
    userscoreSpan.innerHTML= userScore;
    outputMessage.innerHTML=`${playerChoice}${smallUserWord} beats ${computerChoice}${smallCompWord} You Win`
}

function lose(playerChoice, computerChoice){
    compScore++
    compscoreSpan.innerHTML=compScore;
    outputMessage.innerHTML= `${computerChoice}${smallCompWord} beats ${playerChoice}${smallUserWord} You Lose`
}

function draw(playerChoice, computerChoice){
    outputMessage.innerHTML=`${playerChoice} ${smallUserWord} and ${computerChoice}${smallCompWord}its a draw`
}


function game(userChoice){
    let playerChoice= userChoice;
    let computerChoice= getComputerChoice()

    switch(playerChoice+computerChoice){
        case "ROCKSCISSORS":
        case "PAPERROCK":
        case "SCISSORSPAPER":
            win(playerChoice, computerChoice);
            break;
        
        case "ROCKPAPER":
        case "PAPERSCISSORS":
        case "SCISSORSROCK":
            lose(playerChoice, computerChoice)
            break;
        
        case "ROCKROCK":
        case "PAPERPAPER":
        case "SCISSORSSCISSORS":
            draw(playerChoice, computerChoice)
    }

}

function main(){
    rockDiv.addEventListener("click", function(){
        game(ROCK)
    })

    paperDiv.addEventListener('click', function(){
        game(PAPER)
    })
    scissorsDiv.addEventListener('click', function(){
        game(SCISSORS)
    })
}

main()