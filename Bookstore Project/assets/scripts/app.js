const addMovieBtn= document.getElementById('addMovie')
const getModal=document.getElementById('add-modal')
const getBackdrop= document.getElementById('backdrop')
const getCancelModal=document.querySelector('.btn--passive')
const getValidDetails= document.querySelector('.btn--success')
const inputSelectors= getModal.querySelectorAll('input')
const entryText= document.getElementById('entry-text')
const deleteModalBtn= document.getElementById('delete-modal')
const getMovieList= document.getElementById('movie-list')

let movies=[]


const deleteMovieDetails=(movieId)=>{
    getBackdrop.classList.remove('visible')
    deleteModalBtn.classList.remove('visible')

    let movieIndex=0
    for(const movie of movies){
        if(movie.id===movieId){
            break;
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    getMovieList.children[movieIndex].remove();

    if(movies.length===0){
        entryText.style.display="block"
        const p=entryText.querySelector('p')
        p.textContent='Your personal Movie database is Empty'
    }else{
        getMovieList.style.display='block'
    }
}

const deleteMovieHandler=(movieId)=>{
    getBackdrop.classList.add('visible')
    deleteModalBtn.classList.add('visible')

    getBackdrop.addEventListener('click', ()=>{
        getBackdrop.classList.remove('visible')
        deleteModalBtn.classList.remove('visible')
    })
    
    let yesBtn=document.getElementById('yesBtn')
    const noBtn=document.getElementById('noBtn')

    yesBtn.replaceWith(yesBtn.cloneNode(true))

    yesBtn=document.getElementById('yesBtn')

    noBtn.removeEventListener('click', ()=>{
        getBackdrop.classList.remove('visible')
        deleteModalBtn.classList.remove('visible')
    })


    noBtn.addEventListener('click', ()=>{
        getBackdrop.classList.remove('visible')
        deleteModalBtn.classList.remove('visible')
    })


    yesBtn.addEventListener('click', deleteMovieDetails.bind(null, movieId))
    

}

const getDataNeeded=(id,title,imageURL,ratings)=>{
    const getMovieList=document.getElementById('movie-list')

    let newList=document.createElement('li')
    newList.className='movie-element'
    newList.innerHTML=`<div class="movie_element__image">
    <img src="${imageURL}" alt=${title}>
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${ratings}/5stars</p>
    </div>
    `
    getMovieList.appendChild(newList)
    newList.addEventListener('click', deleteMovieHandler.bind(null, id))
}
const updateUI=()=>{
    if(movies.length===0){
        entryText.style.display='block'
    }else{
        getBackdrop.classList.remove('visible')
        getModal.classList.remove('visible')
        entryText.style.display='none'
    }
}

const resetInputs=()=>{
    for(const input of inputSelectors){
        input.value=""
    }
}

const validateCollectDetails=()=>{
   const titleDetails= inputSelectors[0].value
   const imageURL= inputSelectors[1].value
   const ratings= inputSelectors[2].value

   if(titleDetails.trim()==="" ||
      imageURL.trim()=== ""||
      ratings.trim()=== ""||
      +ratings<1 || +ratings >5){
        alert('Enter Valid Details, Rating is from 1 -5')
      }else{
        let getMovieDetails={
            id:Math.random().toString(),
            title:titleDetails,
            imageURL:imageURL,
            ratings:ratings
        };
        movies.push(getMovieDetails)
        resetInputs()
        updateUI()
        getDataNeeded(getMovieDetails.id, getMovieDetails.title, getMovieDetails.imageURL,getMovieDetails.ratings)
      }
      
}

const removeModal=()=>{
    getBackdrop.classList.remove('visible')
    getModal.classList.remove('visible')
    resetInputs()
}
const showBookDetails=()=>{
    getModal.classList.add('visible')
    getBackdrop.classList.add('visible')
}

const toggleBackdrop=()=>{
    getBackdrop.classList.toggle('visible')
    getModal.classList.remove('visible')
}

getValidDetails.addEventListener('click', validateCollectDetails)
getCancelModal.addEventListener('click', removeModal)
getBackdrop.addEventListener('click', toggleBackdrop)
addMovieBtn.addEventListener('click', showBookDetails)