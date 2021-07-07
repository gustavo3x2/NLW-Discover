import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos botões com classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', handleClick)
})

//ao clickar abre modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  //usado para desaparecer a cerquilha no link
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  //faz puchar o numero da sala
  const roomId = document.querySelector('#room-id').dataset.id
  //
  const questionId = event.target.dataset.id
  //selecionar o form e alterar o action
  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta ?`
  modalDescription.innerHTML = `Tem certeza que quer ${text.toLocaleLowerCase()} esta pergunta ?`
  modalButton.innerHTML = `Sim , ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}
