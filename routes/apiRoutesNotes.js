const noteDB = require("../models")

module.exports = app => {
  
  app.get("/notes", function (req, res) {
    noteDB.findAll({})
    .then(notes => res.json(notes))
  })

  app.post("/notes", function (req, res) {
    noteDB.create({
      title: req.body.title,
      body: req.body.body
    }).then(note => res.json(note))
  })

  app.get("/notes/:id", function(req, res) {
    noteDB.findByID(req.params.id)
    .then(note => res.json(note))
    .catch(err => console.log(err))
  })

  app.put("/notes/:id", function(req, res){
    noteDB.update({body: body},{
      where: {id: req.params.id}
    })
    .then(note => res.json(note))
    .catch(err => console.log(err))
  })

  app.delete("/notes/:id", function (req, res) {
    noteDB.destroy({
      where:{id: req.params.id}
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.json(err)
    })
  })
}