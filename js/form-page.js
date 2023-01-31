const loginForm2 = document.getElementById("login-form2");
const welcomeTitle = document.getElementById("login-header");
const loginButton2 = document.getElementById("login2-form-submit");
const nameField = document.getElementById("name-field");
const lastNameField = document.getElementById("lastname-field");
const ageField = document.getElementById("age-field");
const loginErrorMsg2 = document.getElementById("login-error-msg2")

loginButton2.addEventListener("click", (e) => {
    e.preventDefault();
    const name = loginForm2.name.value;
    const lastname = loginForm2.lastname.value;
    const age = loginForm2.age.value;


    if (name == null || name.length == 0) {
        loginErrorMsg2.style.opacity = 1;
    }
    else if (age == null || age.length == 0) {
        loginErrorMsg2.style.opacity = 1;
    }
    else if (lastname == null || lastname.length == 0) {
        loginErrorMsg2.style.opacity = 1;
    }
    else {
        welcomeTitle.innerHTML = `<h2> ${name} ${lastname}  </h2>`
        loginForm2.innerHTML = `<h2>Su edad es ${age} años </h2>`;
    }
    // if (name === "admin" && lastname === "admin") {

    //         // console.log("Funciona")
    //      window.location = "./index2.html";
    // } else {
    //     loginErrorMsg.style.opacity = 1; 
    // }
})