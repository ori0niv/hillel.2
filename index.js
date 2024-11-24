document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    const nameError = document.getElementById("nameError");
    const messageError = document.getElementById("messageError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    messageError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";

    const phoneRegex = /^\+380\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (message.length < 5) {
        messageError.textContent = "Message must be at least 5 characters.";
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must start with +380 and include 9 digits.";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        console.log({
            name: name,
            message: message,
            phone: phone,
            email: email,
        });

        alert("Message sent successfully!");
        this.reset();
    }
});
