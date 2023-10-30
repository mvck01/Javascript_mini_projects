const arr= ['green', 'red',"rgb(120,146, 180)", '#f15025']

clickMe= document.getElementById('btn')
colorPicker= document.querySelector('.color')

function getRandomNumber(){
    return Math.floor(Math.random()*arr.length)
}

clickMe.addEventListener('click', function(){
    
    document.body.style.backgroundColor= arr[getRandomNumber()]

    colorPicker.textContent= arr[getRandomNumber()]
})
