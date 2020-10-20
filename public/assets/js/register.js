const { default: Swal } = require("sweetalert2")

  $("#createUser").on("submit", function(e){
    e.preventDefault()
    const user = {
      name: $("#emailInput").val().trim(),
      password: $("#password").val().trim()
    }


  if(!user.email || !user.password){
    Swal.fire({
      icon: error,
      title: 'You forgot something!',
      text: 'It appears one of the fields is not filled in. Please fill in both fields before submitting your data.'
    })
  }

  $.ajax({
    url: '/api/users/register',
    method: 'POST',
    data: userData
  })
  .then(function (userData) {
    console.log(userData);

    return swal({
        title: "You're in!",
        text: "We're going to send you back to the login page. Simply enter the same credentials you just used to create your account, and then you should be able to access the full power of NodeNotes!",
        icon: 'success'
      })
      .then(function () {
        window.location.href = "./notes"
      });
  })
})
