const btnRojo = document.querySelector('.rojo')
const btnVioleta = document.querySelector('.violeta')
const btnAzul = document.querySelector('.azul')
const btnMarron = document.querySelector('.marron')

btnRojo.addEventListener('click', ()=>{
    body.classList.add('fondoRojo')
})
btnVioleta.addEventListener('click', ()=>{
    body.classList.add('fondoVioleta')
})
btnAzul.addEventListener('click', ()=>{
    body.classList.add('fondoAzul')
})
btnMarron.addEventListener('click', ()=>{
    body.classList.add('fondoMarron')
    body.classList.remove('fondoAzul')
    body.classList.remove('fondoVioleta')
    body.classList.remove('FondoRojo')
})

const body = document.querySelector('body');