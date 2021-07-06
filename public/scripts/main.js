import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos botões com classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener("click", handleClick)
})

//ao clickar abre modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
  button.addEventListener("click",(event) => handleClick(event, false))
})

function handleClick(event , check = true) {
  const text = check ? "Marcar como lida" : "Excluir"

  modalTitle.innerHTML = `${text} esta pergunta ?`
  modalDescription.innerHTML = `Tem certeza que quer ${text.toLocaleLowerCase()} esta pergunta ?`
  modal.open()
}

