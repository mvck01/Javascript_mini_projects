const eventHolder= document.getElementById('eventHolder')
const listContainer= document.getElementById('listContainer')

function addTask(){
    let content= eventHolder.value

    if(content === ''){
        alert('You must write something')
    }else{
        //if there is content append to a newLy created Li
        let li = document.createElement('li')
        li.innerHTML= content
        listContainer.appendChild(li)

        //add the span for the 'x' part

        let span = document.createElement('span')
        span.innerHTML= '\u00d7'
        li.appendChild(span)
    }
    eventHolder.value=''
    saveData()
}


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function getData(){
    listContainer.innerHTML= localStorage.getItem('data')
}
getData()

