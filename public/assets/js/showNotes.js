// CommonJS



function getData () {
  $.ajax({
    method: "GET",
    url: "/api/notes",
  }).then(function (data) {
    console.log(data)
  })
}

getData()

const renderNotes = function () {
  $.ajax({
    method: "GET",
    url: "/api/notes",
  }).then(function (data) {
    var notesArray = [];

    for (var i = 0; i < data.length; i++) {
      var note = data[i];
      var dateTime = moment(note.created_at).format(" h:mm a on MM/DD/YYYY");

      var $newNote = $("<div>");
      $newNote.addClass("sticky-note");
      var $noteTitle = $("<h5>").text(note.title);
      var $noteBody = $("<p>").text(note.body);
      var $noteTime = $("<p>").text(`Created at ${dateTime}`);
      var $del = $("<button>").text("Delete this Note");
      $del.addClass("btn-danger btn mb-3 delete-btn");
      $del.attr("data-id", note.id);

      $newNote.append($noteTitle, $noteBody, $noteTime, $del);

      notesArray.push($newNote);
    }

    $("#noteDiv").append(notesArray.reverse());
  });
};

renderNotes();

$(document).on("click", ".delete-btn", function (event) {
  event.preventDefault();
  var noteID = $(this).attr("data-id");
  var confirm = confirm(
    "Are you ABSOLUTELY sure you want to do this? Your note will be gone forever, and you won't be able to get it back..."
  );
  if (confirm === false) {
    event.preventDefault();
  } else {
    $.ajax({
      method: "DELETE",
      url: "/api/notes/" + noteID,
    }).then(function () {
      location.reload();
    });
  }
});
