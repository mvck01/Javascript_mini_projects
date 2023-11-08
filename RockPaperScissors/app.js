const inputElement= document.getElementById('elementValue')
const startGameBtn = document.getElementById('start-game-btn');
const computerSelection= document.getElementById('computerSelection')
const winner= document.getElementById('whoWon')
const reloadBtn= document.getElementById('reloadBtn')

const ROCK= 'ROCK'
const PAPER = 'PAPER'
const SCISSORS= 'SCISSORS'

const DEFAULT_USER_CHOICE= function (){
    let elements=[ROCK, PAPER, SCISSORS]
    let random =Math.floor(Math.random()*elements.length)
    return elements[random]
}
const RESULT_DRAW= 'DRAW!'
const RESULT_PLAYER_WINS= 'PLAYER_WINS!'
const RESULT_COMPUTER_WINS= 'COMPUTER_WINS!'


//get Element first

function getPlayerChoice(){
    selection= inputElement.value.toUpperCase()
    if(inputElement.value==''){
        alert(`Error! you must have an element, hence we picked ${DEFAULT_USER_CHOICE()} for you`)
        return DEFAULT_USER_CHOICE()
    }else if(selection !==ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Error! you must have an element, hence we picked ${DEFAULT_USER_CHOICE()} for you`)
        return DEFAULT_USER_CHOICE()
    }else{
        return selection
    }

}



function getComputerChoice(){
    const cSelection=[ROCK,PAPER,SCISSORS]

    let randomSeclection= Math.floor(Math.random()*cSelection.length)
    computerSelection.innerHTML= cSelection[randomSeclection]
    return cSelection[randomSeclection]
}

let getWinner= function (pChoice, cChoice){
    if(pChoice===cChoice){
        winner.innerHTML= `Its a ${RESULT_DRAW}`
        reloadBtn.style.display= 'block'
        return RESULT_DRAW
    }else if(cChoice===PAPER && pChoice=== ROCK ||
        cChoice === SCISSORS && pChoice === PAPER||
        cChoice===ROCK && pChoice===SCISSORS){
        winner.innerHTML= RESULT_COMPUTER_WINS
        reloadBtn.style.display= 'block'
        return RESULT_COMPUTER_WINS
    }else{
        winner.innerHTML= RESULT_PLAYER_WINS
        reloadBtn.style.display= 'block'
        return RESULT_PLAYER_WINS
    }
}

startGameBtn.addEventListener('click', function(){
    console.log('Game is starting...')

    const playerSelection = getPlayerChoice()
    const computerSelection= getComputerChoice()

  getWinner(playerSelection, computerSelection)
})

reloadBtn.addEventListener('click', function(){
    location.reload()
})

