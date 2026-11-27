function hasValidCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    return username === "sathyabama" && password === "12345";
}

function validateLogin() {
    if (!hasValidCredentials()) {
        alert("Invalid username or password");
        return false;
    }

    document.getElementById("loginSection").hidden = true;
    document.getElementById("registrationDetails").hidden = false;
    document.getElementById("studentName").focus();
    return true;
}

function validateForm() {
    var age = document.getElementById("age").value;

    if (!hasValidCredentials()) {
        alert("Invalid username or password");
        return false;
    }

    if (age >= 30 || age <= 0) {
        alert("Age must be below 30");
        return false;
    }

 document.getElementById("successMessage").innerHTML =
        "Registration Successful!";

    return false;
}