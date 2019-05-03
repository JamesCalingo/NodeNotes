

const getAndRenderNotes = function() {
  $.ajax({ method: "GET", url: "/api/notes" }).then(function(data) {
    var notesArray = [];

    for (var i = 0; i < data.length; i++) {
      var note = data[i];
     var dateTime = moment(note.created_at).format("MM/DD/YYYY h:mm a")

      var $newNote = $("<div>");
      var $noteTitle = $("<h5>").text(note.title);
      var $noteBody = $("<p>").text(note.body);
      var $noteTime = $("<p>").text(`Created at ${dateTime}`);
      var $del = $("<button>").text("Delete this Note")
      $del.addClass("btn-danger btn mb-5 delete")

      $newNote.append($noteTitle, $noteBody, $noteTime, $del);

      notesArray.push($newNote);
    }

    $("#noteDivs").append(notesArray.reverse());
  });
};

getAndRenderNotes();

$(".delete").on("click", function(){
  $ajax({})
})