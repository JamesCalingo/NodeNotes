const db = require('../models')
const withAuth = require('../middleware/authentication')

module.exports = function(app){

app.post('/api/notes', withAuth, function (req, res) {
  req.body.userID = req.id
  db.Notes.create(req.body).then(function(notetakerDB){
    res.json(notetakerDB)
  })
  })


app.delete('/api/notes/:id', function (req, res) {
  connection.query('DELETE FROM notes WHERE id = ?', [req.params.id], function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

}
