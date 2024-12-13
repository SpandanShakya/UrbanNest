document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const nameInput = form.querySelector('input[type="text"][placeholder="Name and surname*"]');
    const emailInput = form.querySelector('input[type="text"][placeholder="Email*"]');
    const phoneInput = form.querySelector('input[type="tel"][placeholder="Telephone*"]');
    const commentsInput = form.querySelector('input[type="text"][style="height: 250px;"][placeholder="Comments*"]');
    const checkboxInput = form.querySelector('input[type="checkbox"]');
    const submitButton = form.querySelector('.button1');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Remove previous error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.remove();
        });

        // Validate inputs
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, '*Name and surname is required');
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            showError(emailInput, '*Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, '*Invalid email format');
            isValid = false;
        }

        if (phoneInput.value.trim() === '') {
            showError(phoneInput, '*Telephone is required');
            isValid = false;
        }

        if (commentsInput.value.trim() === '') {
            showError(commentsInput, '*Comments are required');
            isValid = false;
        }

        if (!checkboxInput.checked) {
            showError(checkboxInput.parentNode, '*Please accept the privacy policy');
            isValid = false;
        }

        // If all inputs are valid, submit the form
        if (isValid) {
            // Your form submission logic here
            alert('Form submitted successfully!');
            form.reset(); // Reset the form after submission
        }
    });

    function showError(input, message) {
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        input.parentNode.insertBefore(errorMessage, input.nextElementSibling); // Append error message after the input field
    }

    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Dynamically add CSS styling for error messages
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .error-message {
            color: red;
            font-size: 12px;
            display: block;
            margin-top: 5px;
        }
    `;
    document.head.appendChild(styleElement);
});