document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelectorAll('.desktop-nav');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Event listener for the menu button
    menuButton.addEventListener('click', function () {
        // Toggle visibility of navigation links
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.display = (navLinks[i].style.display === 'none' || navLinks[i].style.display === '') ? 'block' : 'none';
        }

        // Check if the dropdown content is visible
        const isDropdownVisible = window.getComputedStyle(dropdownContent).getPropertyValue('display') !== 'none';

        // If the dropdown content is visible, set its display to block
        if (isDropdownVisible) {
            dropdownContent.style.display = 'block';
        }
    });

    // Event listener for the games dropdown
    dropdown.addEventListener('click', function () {
        // Toggle visibility of dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') ? 'block' : 'none';
    });

    // Event listener for window resize
    window.addEventListener('resize', function () {
        // Reset desktop navigation display on resize
        if (window.innerWidth > 800) {
            // Show desktop navigation links
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.display = 'inline-block';
            }
        } else {
            // Hide desktop navigation when the screen is smaller than 800px
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].style.display = 'none';
            }
        }
    });
});
