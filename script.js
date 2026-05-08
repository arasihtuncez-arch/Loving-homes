document.addEventListener('DOMContentLoaded', () => {
    // Form Submission Logic
    const form = document.getElementById('bespokeForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your bespoke care inquiry has been sent to our Hong Kong team.');
            form.reset();
        });
    }

    // Header transparency on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        window.scrollY > 100 ? nav.style.opacity = "0.95" : nav.style.opacity = "1";
    });
});

// This function runs every time a page loads
window.addEventListener('DOMContentLoaded', () => {
    // 1. Check the URL for a package (e.g., ?package=premium)
    const params = new URLSearchParams(window.location.search);
    const packageType = params.get('package');
    
    // 2. Find the dropdown menu on the page
    const selectElement = document.querySelector('select');

    // 3. If we found a package in the URL and a dropdown on the page, select it
    if (packageType && selectElement) {
        if (packageType === 'premium') {
            selectElement.value = 'Premium Package';
        } else if (packageType === 'classic') {
            selectElement.value = 'Classic Package';
        } else if (packageType === 'day') {
            // Note: Ensure the text below matches the <option> text in your HTML exactly
            selectElement.value = 'Classic Package'; // Or add a "Day Package" option to your HTML select
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burger.classList.toggle("active");
        });
    }

});