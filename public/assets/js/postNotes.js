const postNotestoDB = function(event){
event.preventDefault();

var noteTitle = $("#noteTitle")
var noteBody = $("#noteBody")

var note = {
  title: noteTitle.val().trim(),
  body: noteBody.val().trim()
}
if(!noteTitle || !noteBody){
alert("It seems you didn't fill in either the title or content of your note.");
return false;
}

$.ajax({
  method: "POST",
  url: "/api/notes",
  data: note
}).then(function(data) {
  alert("Note saved!");

  location.reload()
});
}

$("#submitNote").on("click", postNotestoDB)