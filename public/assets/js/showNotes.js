const getAndRenderNotes = function() {
  $.ajax({ method: "GET", url: "/api/notes" }).then(function(data) {
    var notesArray = [];

    for (var i = 0; i < data.length; i++) {
      var note = data[i];

      var $newNote = $("<div>");
      var $noteTitle = $("<h5>").text(note.title);
      var $noteBody = $("<p>").text(note.body);
      var $noteTime = $("<p>").text(`Created at ${note.created_at}`);
      var $del = 

      $newNote.append($noteTitle, $noteBody, $noteTime);

      notesArray.push($newNote);
    }

    $("#noteDivs").append(notesArray.reverse());
  });
};

getAndRenderNotes();
