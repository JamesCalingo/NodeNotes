// CommonJS

function getData() {
  $.ajax({
    method: "GET",
    url: "/api/notes",
  }).then(function (data) {
    renderNotes(data);
  });
}

function renderNotes(arr) {
  arr.forEach((note) => {
    const dateTime = moment(note.created_at).format("MM/DD/YYYY h:mm a");

    const $newNote = $("<div>");
    $newNote.addClass("sticky-note");
    const $noteTitle = $("<h5>").text(note.title);
    const $noteBody = $("<p>").text(note.body);
    const $noteTime = $("<p>").text(dateTime);
    const $del = $("<button>").text("Delete this Note");
    $del.addClass("btn-danger btn delete-btn");
    $del.attr("data-id", note.id);

    $newNote.append($noteTitle, $noteBody, $noteTime, $del);

    $("#noteDiv").prepend($newNote);
  });
}

getData();

// renderNotes();

$(document).on("click", ".delete-btn", function (event) {
  event.preventDefault();
  const noteID = $(this).attr("data-id");
  const confirmDelete = confirm(
    "Are you ABSOLUTELY sure you want to do this? Your note will be gone forever, and you won't be able to get it back..."
  );
  if (confirmDelete === false) {
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
