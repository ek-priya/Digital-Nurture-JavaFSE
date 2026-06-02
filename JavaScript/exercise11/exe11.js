document
.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    if(name === "" || email === ""){

        document.getElementById("message")
        .textContent =
        "All fields are required";

        return;
    }

    document.getElementById("message")
    .textContent =
    "Registration Successful";

});