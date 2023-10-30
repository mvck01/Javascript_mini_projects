let counterVal = document.getElementById('value')
let increaseCounter= document.querySelector('.increase')
let decreaseCounter= document.querySelector('.decrease')
let resetCounter = document.querySelector('.reset')



increaseCounter.addEventListener('click', counterIncrease)


function counterIncrease(){
    let oldValue = parseInt(counterVal.textContent)
    counterVal.textContent= oldValue +1

    colorNumbers()    
}


resetCounter.addEventListener('click', function (){
    counterVal.textContent=0

   colorNumbers()
})


decreaseCounter.addEventListener('click', counterReduce)

function counterReduce(){
    let oldValue = parseInt(counterVal.textContent)
    counterVal.textContent= oldValue -1
    colorNumbers()

}


function colorNumbers(){
    if(counterVal.textContent >=1){
        counterVal.style.color='green'
    }else if(counterVal.textContent ==0){
        counterVal.style.color= 'black'
    }else if(counterVal.textContent <0){
        counterVal.style.color='red'
    }
}
