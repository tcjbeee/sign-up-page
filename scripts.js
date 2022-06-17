// Code for Password Colour Change here


button = document.querySelector("#create");

button.addEventListener("pointerover", function grow() {
    button.style.width = "16.05rem";
    button.style.height = "4.05rem";
    button.style.backgroundColor = "#718a5b";
})

button.addEventListener("pointerout", function shrink() {
    button.style.backgroundColor = "#596D48";
})

button.addEventListener("click", function () {
    submitForm(); }
);

function submitForm() {
    passwordValue = document.querySelector("#password").value;
    confirmPasswordValue = document.querySelector("#confirmPassword").value;

    if (confirmPasswordValue == passwordValue) {
    form = document.querySelector("form").submit;
    location.href = "complete.html";
    }

    else {
        confirmPassword = document.querySelector("#confirmPassword");
        passwordText = document.querySelector(".passwordBox");
        confirmPassword.style.borderColor = "rgb(199, 54, 54)";
        password.style.borderColor = "rgb(199, 54, 54)";
        passwordsDoNotMatch = document.createElement("noMatch");
        passwordsDoNotMatch.style = "color: rgb(199, 54, 54); font-size: 16px;"
        passwordsDoNotMatch.textContent = "* Passwords do not match.";
        passwordText.appendChild(passwordsDoNotMatch);
    }
}