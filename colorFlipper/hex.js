const arr_2= [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']


clickMe= document.getElementById('btn')
colorPicker= document.querySelector('.color')

function getRandomNumber(){
    return Math.floor(Math.random()*arr_2.length)
}

//basically ensure its a hex code,  using a for loop and with it loop the hex code is created. 

clickMe.addEventListener('click', function(){
    let hexCode='#'
    for(i=0; i<6; i++){
        
        hexCode= hexCode + arr_2[getRandomNumber()]
       
    }
    document.body.style.backgroundColor=hexCode
    colorPicker.textContent= hexCode
})