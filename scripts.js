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
    form = document.querySelector("form").submit;
    location.href = "complete.html";
}