let validatePassword = e => {
    let password = document.querySelector("#password").value,
        password2 = document.querySelector("#confirm-password").value,
        error = document.querySelector(".error");
    console.log(password);
    console.log(password2);
    if (password == password2) return;
    e.preventDefault();
    error.style.display = "block";
};

let button = document.querySelector("button");
button.addEventListener("click", validatePassword);