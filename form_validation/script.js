
$("#btn").on("click", function () {
    const emailvalidator = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordvalidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const email = document.getElementById("email").value;
    const Password = document.getElementById("password").value;
    const confrim_password = document.getElementById("con_password").value;
    let isvalid = true;


    console.log(email);
    console.log(Password);
    console.log(confrim_password);

    if (email === "" || !emailvalidator.test(email)) {
        $("#err").text("Email is invalid!");
        isvalid = false;
    }

    if (Password == "" || confrim_password == "" || !passwordvalidator.test(Password)) {
        isvalid = false;
        $("#err2").text("Password not accepted!")
    }

    if (!Password == confrim_password) {
        isvalid = false;
        $("#err2").text("Password not same!");
    }

    if (isvalid) {
        $("#err2").text("SignUp successfully")
    }

    console.log("pressed!")
}
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         