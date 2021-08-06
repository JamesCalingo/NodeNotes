const Swal = require("sweetalert2")


Swal.fire({
  title: "Please input your email to get your notes. If you don't have an account with NodeNotes yet, one will be created for you once you log in.",
  html: `<button class="button btn btn-primary>Create account</button>
  <input type="text" id="email" class="swal2-input" placeholder="email address">`,
  confirmButtonText: 'Sign in',
  focusConfirm: false,
  preConfirm: () => {
    const user = {
    email: Swal.getPopup().querySelector('#email').value,
    password: Swal.getPopup().querySelector('#password').value
    }
    if (!email) {
      Swal.showValidationMessage(`Please make sure your email is entered properly.`)
    }
    // else if (the credentials don't match data in the mySQL database){
    //   Swal.showValidationMessage("Login failed. check your username and password and then try again.")
    // }
    
  }
}).then((result) => {
  $.ajax({
    url: '/api/users/login',
    method: 'POST',
    data: user
  })
  Swal.fire(`
  Welcome! For your safety, you'll be immediately logged out after 30 minutes. 
  `)
})
