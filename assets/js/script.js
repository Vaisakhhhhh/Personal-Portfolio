
// action="https://api.web3forms.com/submit"
window.addEventListener('load', () => {
})
const form = document.getElementById("contact-form");
console.log(form)

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const errorMsg = document.querySelector("#error-msg");
   console.log(errorMsg);
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    if (validateForm()) {
        // Form is valid, you can submit it here
        // form.action="https://api.web3forms.com/submit"
        // form.method="POST"
        form.submit();
    } else {
        // if the  Form is not valid, show error message
        errorMsg.style.display = "block";
        errorMsg.innerText = "Please fill out all the fields correctly.";
    }
    function validateForm() {
        let isValid = true;

        // Reset error message
        errorMsg.innerText = "";
        errorMsg.style.display = "none";

        // Validate name
        if (nameInput.value.trim() === "") {
            isValid = false;
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            isValid = false;
        }

        return isValid;
    }
});

