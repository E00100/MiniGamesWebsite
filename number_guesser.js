document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelectorAll('.desktop-nav');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Event listener for the menu button
    menuButton.addEventListener('click', function () {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.toggle('block');
        }

        // Check if the dropdown content is visible
        const isDropdownVisible = window.getComputedStyle(dropdownContent).getPropertyValue('display') !== 'none';

        // If the dropdown content is visible, toggle its visibility
        dropdownContent.classList.toggle('block', isDropdownVisible);
    });

    // Event listener for the games dropdown
    dropdown.addEventListener('click', function () {
        dropdownContent.classList.toggle('block');
    });

    // Event listener for window resize
    window.addEventListener('resize', function () {
        // Reset desktop navigation display on resize
        const isDesktop = window.innerWidth > 800;
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.display = isDesktop ? 'inline-block' : 'none';
        }
    });

    // Number Guesser game logic
    document.getElementById("guessButton").addEventListener("click", function () {
        // Get a random number between 1 - 10 (inclusive)
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        // Get the user's input
        const guessedNumber = parseFloat(document.getElementById("userGuess").value);

        // Check if the guessed number is a number between 1 and 10
        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
            document.getElementById("result").textContent = 'Please enter a number between 1 and 10.';
            return;
        }

        // Compare the number guessed to the random number
        if (guessedNumber === randomNumber) {
            const resultElement = document.getElementById("result");
            resultElement.textContent = 'You win! The number is: ' + guessedNumber;
            resultElement.classList.add("win-message");
            const winnerImg = document.querySelector(".winner-img");
            if (winnerImg) {
                winnerImg.style.display = 'block';
            }
        } else {
            const resultElement = document.getElementById("result");
            if (guessedNumber > randomNumber) {
                resultElement.textContent = 'The guessed number is too high ' + guessedNumber + ' > ' + randomNumber;
            } else {
                resultElement.textContent = 'The guessed number is too low ' + guessedNumber + ' < ' + randomNumber;
            }
        }
    });
});
