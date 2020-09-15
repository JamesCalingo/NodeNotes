var router = require('express').Router()
var path = require('path')

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/home.html'))
})

router.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// All other paths serve the home.html page
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/404.html'))
})

module.exports = router
