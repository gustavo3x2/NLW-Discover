module.exports = {
  index(req, res) {
    const roomId = req.params.room.export
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password

    console.log(`room = ${roomId}, questionId = ${questionId}, ação = ${action},
    senha = ${password}`);
  }
}