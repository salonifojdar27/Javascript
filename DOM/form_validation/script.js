

const name = document.getElementById("name");
const Email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("con_password");
const Sign_up_button = document.getElementById("btn");
let error = document.getElementById("error")

Sign_up_button.addEventListener("click", () => {
    form_validate();
})

function form_validate() {
    if (name.value == "" || Email.value == "" || password.value == "" || confirm_password.value == "") {
        error.innerHTML = "All feilds are necessary"

        if (password == confirm_password) {
            error.innerHTML = "Enter same password"
        }
    }
    else {
        error.innerHTML = "succsessfully registered!"
    }
}