// CAMBIAR ASIDE DE TEXTO A IMAGEN 

const buttonImage = document.getElementById('imageButton')
const buttonText = document.getElementById('textButton')
const asideImage = document.getElementById('asideImg')
const asideText = document.getElementById('asideText')


buttonText.addEventListener('click', ()=>hideAsideImg())
const hideAsideText = ()=> {
    asideText.classList('asideText')
    asideImage.classList.remove('asideImage')
}

buttonImage.addEventListener('click', ()=>hideAsideImg())
const hideAsideImg = ()=> {
    asideText.classList.remove('asideText')
    asideImage.classList.add('asideImage')
}

