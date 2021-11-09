$("#new-note").on("click", function() {
  $("#write-note").css(  {
    "visibility": "visible",
  })
})

const postNotestoDB = function (event) {
  event.preventDefault();

  const noteTitle = $("#noteTitle");
  const noteBody = $("#noteBody");

  const note = {
    title: noteTitle.val().trim(),
    body: noteBody.val().trim(),
  };
  if (!note.body || !note.title) {
    Swal.fire({
      title: "Save the trees.",
      text: "Don't waste paper - or database space.\n(read: Please make sure your note has both a title and content)",
      type: "error",
    });
  } else {
    $.ajax({
      method: "POST",
      url: "/api/notes",
      data: note,
    }).then(function (data) {
      alert("Note saved!");

      location.reload();
    });
  }
};

$("#submitNote").on("click", postNotestoDB);
