document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", function () {

    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const emailInput = document.getElementById("email_address");
    const phoneInput = document.getElementById("phone_number");

    const commentInput = document.getElementById("comments");
    const charCount = document.getElementById("comments-info");

    function showError(input, message) {

        const errorOutput = document.getElementById(input.id + "-error");
        errorOutput.textContent = message;
        errorOutput.classList.remove("hidden");
        input.classList.add("flash");

        setTimeout(() => {

            errorOutput.classList.add("hidden");
            input.classList.remove("flash");

        }, 2000);

    }

    const allowedNameChars = /^[A-Za-zÀ-ž'\-\s]+$/;

    function enforceNameCharacterRules(event) {
        if (!allowedNameChars.test(event.target.value)){
            showError(event.target, "Invalid character entered.");
            event.target.value = event.target.value.replace(/[^A-Za-zÀ-ž'\-\s]/g, "");
        }
    }

    firstNameInput.addEventListener("input", enforceNameCharacterRules);

    firstNameInput.addEventListener("invalid", (e) => {
        showError(firstNameInput, "Please enter your first name.");
    });

    lastNameInput.addEventListener("input", enforceNameCharacterRules);

    lastNameInput.addEventListener("invalid", (e) => {
        showError(lastNameInput, "Please enter your last name.");
    });


    emailInput.addEventListener("invalid", (e) => {
        showError(emailInput, "Please enter a valid email.");
    });
    

    const allowedPhoneChars = /^[0-9-]+$/;

    function enforcePhoneCharacterRules(event) {
        if (!allowedPhoneChars.test(event.target.value)){
            showError(event.target, "Invalid character entered.");
            event.target.value = event.target.value.replace(/[^0-9-]/g, "");
        }
    }

    phoneInput.addEventListener("input", enforcePhoneCharacterRules);

    phoneInput.addEventListener("invalid", (e) => {
        showError(phoneInput, "Please enter a valid number.");
    });

    function informCommentCharLength(event) {
        const charactersRemaining = 500 - event.target.value.length;
        charCount.textContent = `Enter any comments here. The maximum length is 500 characters. ${charactersRemaining} characters remaining`;
        
        if (charactersRemaining <= 50){
            charCount.style.color = "red";
        } else if (charactersRemaining <= 100){
            charCount.style.color = "orange";
        } else {
            charCount.style.color = "rgb(223, 206, 255)";
        }

    }

    commentInput.addEventListener("input", informCommentCharLength);

});