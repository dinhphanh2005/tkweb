document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const rateInput = document.getElementById('rate');

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    function validateRate(rate) {
        return !isNaN(rate) && rate !== ' ';
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errorMessage = ' ';

        const emailValue = emailInput.value.trim();
        if (emailValue === ' ') {
            isValid = false;
            errorMessage += 'Please enter your email';
        } else if (!validateEmail(emailValue)) {
            isValid = false;
            errorMessage += 'Please enter a valid email';
        }

        const rateValue = rateInput.value.trim();
        if (!validateRate(rateValue)) {
            isValid = false;
            errorMessage += 'Please enter a valid rate';
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});