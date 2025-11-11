// formValidation.js

function validateForm() {
    // Clear any existing error messages
    clearErrors();

    // Get form values
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["femail"].value;
    var phone = document.forms["myForm"]["fphone"].value;
    var password = document.forms["myForm"]["fpass"].value;
    var confirmPassword = document.forms["myForm"]["fcpass"].value;

    // Validation variables
    var valid = true;

    // Name validation
    if (name.length < 3) {
        setError("name", "Name must be at least 3 characters long.");
        valid = false;
    }

    // Email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError("email", "Please enter a valid email address.");
        valid = false;
    }

    // Phone validation (example: checking for 10 digit number)
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        setError("phone", "Phone number must be 10 digits long.");
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        setError("pass", "Password must be at least 6 characters long.");
        valid = false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        setError("cpass", "Passwords do not match.");
        valid = false;
    }

    return valid;
}

// Function to set error message
function setError(id, error) {
    var element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

// Function to clear all error messages
function clearErrors() {
    var errors = document.getElementsByClassName("formerror");
    for (var item of errors) {
        item.innerHTML = "";
    }
}
