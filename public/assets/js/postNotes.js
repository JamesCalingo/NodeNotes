const postNotestoDB = function(event){
event.preventDefault();

var noteTitle = $("#noteTitle")
var noteBody = $("#noteBody")

var note = {
  title: noteTitle.val().trim(),
  body: noteBody.val().trim()
}
if(!note.body || !note.title){
  alert("Save the trees. Don't waste paper - or database space.\n(read: Please make sure your note has both a title and content)")
}
else{
$.ajax({
  method: "POST",
  url: "/api/notes",
  data: note
}).then(function(data) {
  alert("Note saved!");

  location.reload()
});
}
}

$("#submitNote").on("click", postNotestoDB)