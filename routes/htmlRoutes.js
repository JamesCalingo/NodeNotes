var router = require('express').Router()
var path = require('path')

module.exports = function (app){

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/home.html'))
})

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// All other paths serve the home.html page
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/404.html'))
})

app.get('/register', function(req, res){
  res.sendFile(path.join(__dirname, '../public/register.html'))
})
}
