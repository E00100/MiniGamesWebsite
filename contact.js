function validateForm() {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
        return false;
    }

    const nameInput = document.getElementById('name');
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameInput.setCustomValidity('Please enter a valid name containing only alphabets.');
        return false;
    }

    showThankYouMessage();
    return false;
}

function showThankYouMessage() {
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const userName = document.getElementById('userName');

    userName.textContent = document.getElementById('name').value;

    contactForm.style.display = 'none';
    thankYouMessage.style.display = 'block';
}
