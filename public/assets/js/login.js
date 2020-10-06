const { default: Swal } = require("sweetalert2")

Swal.fire({
  title: "Please input your email and password. If you don't have an account with NodeNotes yet, one will be created for you once you log in.",
  html: `<input type="text" id="email" class="swal2-input" placeholder="email address">
  <input type="password" id="password" class="swal2-input" placeholder="Password">`,
  confirmButtonText: 'Sign in',
  focusConfirm: false,
  preConfirm: () => {
    const email = Swal.getPopup().querySelector('#email').value
    const password = Swal.getPopup().querySelector('#password').value
    if (!login || !password) {
      Swal.showValidationMessage(`Please enter login and password`)
    }
    // else if (the credentials don't match data in the mySQL database){
    //   Swal.showValidationMessage("Login failed. check your username and password and then try again.")
    // }
    return { login: login, password: password }
  }
}).then((result) => {
  Swal.fire(`
    Login: ${result.value.login}
    Password: ${result.value.password}
  `.trim())
})
