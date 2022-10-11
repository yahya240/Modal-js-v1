// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modal = document.querySelector('.modal-overlay')
const modalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click',()=>{
    modal.classList.toggle('open-modal')
})

closeBtn.addEventListener('click',()=>{
    modal.classList.toggle('open-modal')
})