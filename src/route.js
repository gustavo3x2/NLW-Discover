const express = require('express')
const QuestionConttroler = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))
//formato do formulario da modal
route.post('/room/:room/:question/:action', QuestionConttroler.index )
route.post('/room/create-room', RoomController.create)

module.exports = route